import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1StaticsRoute } from '../routes'

const app = new OpenAPIHono()

export const staticsHandler = app.openapi(getApiV1StaticsRoute, (c) => {
  throw new Error('Not implemented')
})
