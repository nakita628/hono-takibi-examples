import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmployeeIdBenifyurlRoute,
  getUsersUserIdYourcampusurlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeBenefitsHandler = app
  .openapi(getProvidersEmployersEmployeesEmployeeIdBenifyurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdYourcampusurlRoute, (c) => {
    throw new Error('Not implemented')
  })
