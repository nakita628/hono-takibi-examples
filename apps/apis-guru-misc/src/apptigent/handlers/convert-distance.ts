import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertDistanceRoute } from '../routes'

const app = new OpenAPIHono()

export const convertDistanceHandler = app.openapi(postConvertDistanceRoute, (c) => {
  throw new Error('Not implemented')
})
