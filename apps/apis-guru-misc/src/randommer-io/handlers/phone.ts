import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPhoneCountriesRoute,
  getApiPhoneGenerateRoute,
  getApiPhoneIMEIRoute,
  getApiPhoneValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneHandler = app
  .openapi(getApiPhoneCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPhoneGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPhoneIMEIRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPhoneValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
