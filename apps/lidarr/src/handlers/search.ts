import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getApiV1SearchRoute, (c) => {
  throw new Error('Not implemented')
})
