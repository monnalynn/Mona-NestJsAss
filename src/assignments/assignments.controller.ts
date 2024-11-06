import { Controller, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  // Factorial calculation method
  private calculateFactorial(n: number): number {
    if (n < 0) throw new HttpException('Negative numbers do not have a factorial.', HttpStatus.BAD_REQUEST);
    if (n === 0) return 1; // 0! is 1
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }

  // Endpoint to calculate factorial
  @Get('factorial/:number')
  getFactorial(@Param('number', ParseIntPipe) number: number): { factorial: number } {
    const result = this.calculateFactorial(number);
    return { factorial: result };
  }
}
