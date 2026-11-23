import { OpenAPIHono } from '@hono/zod-openapi'
import { getPersonalCurrentAccountsRoute, headPersonalCurrentAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const personalCurrentAccountsHandler = app
  .openapi(getPersonalCurrentAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPersonalCurrentAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
