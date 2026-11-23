import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsCreateHandler = app.openapi(postPinsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
