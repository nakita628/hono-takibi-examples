import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PayeesRoute } from '../routes'

const app = new OpenAPIHono()

export const payeeBankAccountsHandler = app.openapi(getV1PayeesRoute, (c) => {
  throw new Error('Not implemented')
})
