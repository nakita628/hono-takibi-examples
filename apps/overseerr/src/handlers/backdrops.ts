import { OpenAPIHono } from '@hono/zod-openapi'
import { getBackdropsRoute } from '../routes'

const app = new OpenAPIHono()

export const backdropsHandler = app.openapi(getBackdropsRoute, (c) => {
  throw new Error('Not implemented')
})
