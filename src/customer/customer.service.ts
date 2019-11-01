import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}
  // fetch all customers
  async getAllCustomer(): Promise<Customer[]> {
    const customers = await this.customerModel.find().exec();
    return customers;
  }
  // Get a single customer
  async getCustomer(customerID): Promise<Customer> {
    const customer = await this.customerModel.findById(customerID).exec();
    if (!customer) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return customer;
  }
  // post a single customer
  async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
    const newCustomer = await this.customerModel(createCustomerDTO);
    return newCustomer.save();
  }
  // Edit customer details
  async updateCustomer(
    customerID,
    createCustomerDTO: CreateCustomerDTO,
  ): Promise<Customer> {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(
      customerID,
      createCustomerDTO,
      { new: true },
    );
    if (!updatedCustomer) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return updatedCustomer;
  }
  // Delete a customer
  async deleteCustomer(customerID): Promise<any> {
    const deletedCustomer = await this.customerModel.findByIdAndRemove(
      customerID,
    );
    if (!deletedCustomer) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return deletedCustomer;
  }
}
