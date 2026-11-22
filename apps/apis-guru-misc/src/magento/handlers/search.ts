import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getV1SearchRoute, (c) => {
  throw new Error('Not implemented')
})
