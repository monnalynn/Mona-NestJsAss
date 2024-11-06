import { Controller, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  private generateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }

  @Get('fibonacci/:n')
  getFibonacci(@Param('n', ParseIntPipe) n: number): { sequence: number[] } {
    if (n < 0 || n > 1000) {
      throw new HttpException('Invalid input: n must be between 0 and 1000.', HttpStatus.BAD_REQUEST);
    }
    return { sequence: this.generateFibonacci(n) };
  }
}
