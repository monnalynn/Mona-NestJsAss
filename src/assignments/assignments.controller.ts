import { Controller, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3 || (num % 2 !== 0 && num % 3 !== 0 && ![...Array(Math.sqrt(num)).keys()].some(i => num % (i + 5) === 0))) return true;
    return false;
  }

  @Get('prime/:number')
  checkPrime(@Param('number', ParseIntPipe) number: number): { isPrime: boolean } {
    if (number < 0) throw new HttpException('Please enter a positive integer.', HttpStatus.BAD_REQUEST);
    return { isPrime: this.isPrime(number) };
  }
}

