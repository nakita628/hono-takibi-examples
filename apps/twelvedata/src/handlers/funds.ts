import { OpenAPIHono } from '@hono/zod-openapi'
import { getFundsRoute } from '../routes'

const app = new OpenAPIHono()

export const fundsHandler = app.openapi(getFundsRoute, (c) => {
  throw new Error('Not implemented')
})
