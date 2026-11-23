import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsUpdateHandler = app.openapi(postPinsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
