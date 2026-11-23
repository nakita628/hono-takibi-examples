import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindInteractionsRoute } from '../routes'

const app = new OpenAPIHono()

export const findInteractionsHandler = app.openapi(getFindInteractionsRoute, (c) => {
  throw new Error('Not implemented')
})
