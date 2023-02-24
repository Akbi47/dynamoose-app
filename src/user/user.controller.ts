import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
console.log('hj')
@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) { }

  @Post()
  async create (@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto)
  }

  @Get('/:id')
  async findOne (@Param('id') id: string, @Res() res: any) {
    const user: object = await this.userService.findOne(+id)
    return res.status(HttpStatus.OK).json(user)
  }

  @Patch('/:id')
  async update (@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto)
  }

  @Delete('/:id')
  async remove (@Param('id') id: string) {
    return await this.userService.remove(+id)
  }
}
