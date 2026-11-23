import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsAddRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsAddHandler = app.openapi(postPinsAddRoute, (c) => {
  throw new Error('Not implemented')
})
