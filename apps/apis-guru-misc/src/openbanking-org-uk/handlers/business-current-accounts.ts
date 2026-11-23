import { OpenAPIHono } from '@hono/zod-openapi'
import { getBusinessCurrentAccountsRoute, headBusinessCurrentAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const businessCurrentAccountsHandler = app
  .openapi(getBusinessCurrentAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headBusinessCurrentAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
