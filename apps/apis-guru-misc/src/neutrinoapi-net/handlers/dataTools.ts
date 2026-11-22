import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailValidateRoute,
  getPhoneValidateRoute,
  getUaLookupRoute,
  postBadWordFilterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataToolsHandler = app
  .openapi(postBadWordFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUaLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
