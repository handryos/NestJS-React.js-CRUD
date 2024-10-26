import bcrypt from 'bcrypt';
import { PrismaAuthRepository } from 'src/repositories/prisma/prisma.auth.repository';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import * as CryptoJS from 'crypto-js';

function cleanString(input: string): string {
  let cleanedString = input.replace(/\\/g, '');

  cleanedString = cleanedString.replace(/^"|"$/g, '');

  return cleanedString;
}
@Controller('auth')
class AuthControler {
  constructor(private readonly authRepository: PrismaAuthRepository) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() user: User) {
    try {
      let newUser: Omit<User, 'id'> = {
        email: user.email,
        password: user.password,
      };

      // const bytes = CryptoJS.AES.decrypt(
      //   user.password,
      //   'DA39A3EE5E6B4B0D3255BFEF95601890AFD80709',
      // );

      // const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
      // newUser.password = decryptedPassword;

      await this.authRepository.create(newUser);

      return {
        message: 'User created!',
        user: {
          email: newUser.email,
        },
      };
    } catch (error) {
      return {
        status: 'Internal Server Error',
        message: 'Error creating the user, verify!. ' + error,
      };
    }
  }
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() user: User) {
    try {
      const sendedUser: Omit<User, 'id'> = {
        email: user.email,
        password: user.password,
      };

      // const bytes = CryptoJS.AES.decrypt(
      //   sendedUser.password,
      //   'DA39A3EE5E6B4B0D3255BFEF95601890AFD80709',
      // );
      // const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
      // sendedUser.password = cleanString(decryptedPassword);

      let loggedUser = await this.authRepository.login(sendedUser);
      return {
        message: 'Ok!',
        token: loggedUser.access_token,
      };
    } catch (err: any) {
      return {
        status: 'Internal Server Error',
        message: 'Invalid email or password. Verify!.',
      };
    }
  }
}
export default AuthControler;
