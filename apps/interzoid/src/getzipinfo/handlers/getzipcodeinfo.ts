import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetzipcodeinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const getzipcodeinfoHandler = app.openapi(getGetzipcodeinfoRoute, (c) => {
  throw new Error('Not implemented')
})
