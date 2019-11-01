import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('customer')
export class CustomerController {
  private logger = new Logger('CustomerController');
  constructor(private customerService: CustomerService) {}

  // add a customer
  @Post('/create')
  @UsePipes(new ValidationPipe())
  async addCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO) {
    const customer = await this.customerService.addCustomer(createCustomerDTO);
    this.logger.log(JSON.stringify(createCustomerDTO));
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been created successfully',
      customer,
    });
  }

  // Retrieve customers list
  @Get('customers')
  async getAllCustomer(@Res() res) {
    const customers = await this.customerService.getAllCustomer();
    return res.status(HttpStatus.OK).json(customers);
  }

  // Fetch a particular customer using ID
  @Get('customer/:customerID')
  async getCustomer(@Res() res, @Param('customerID') customerID) {
    const customer = await this.customerService.getCustomer(customerID);
    if (!customer) {
      throw new NotFoundException('Customer does not exist!');
    }
    return res.status(HttpStatus.OK).json(customer);
  }
  @Put('/update')
  @UsePipes(new ValidationPipe())
  async updateCustomer(
    @Res() res,
    @Query('customerID') customerID,
    @Body() createCustomerDTO: CreateCustomerDTO,
  ) {
    const customer = await this.customerService.updateCustomer(
      customerID,
      createCustomerDTO,
    );
    if (!customer) {
      throw new NotFoundException('Customer does not exist!');
    }
    this.logger.log(JSON.stringify(createCustomerDTO));
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been successfully updated',
      customer,
    });
  }

  // Delete a customer
  @Delete('/delete')
  async deleteCustomer(@Res() res, @Query('customerID') customerID) {
    const customer = await this.customerService.deleteCustomer(customerID);
    if (!customer) {
      throw new NotFoundException('Customer does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted',
      customer,
    });
  }
}
