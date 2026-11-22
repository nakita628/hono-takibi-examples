import { OpenAPIHono } from '@hono/zod-openapi'
import { getBalanceRoute, getValidateBasicRoute, getValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const ibanapiHandler = app
  .openapi(getBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValidateBasicRoute, (c) => {
    throw new Error('Not implemented')
  })
