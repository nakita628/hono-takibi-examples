import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StatementsListRoute } from '../routes'

const app = new OpenAPIHono()

export const statementsHandler = app.openapi(getV1StatementsListRoute, (c) => {
  throw new Error('Not implemented')
})
