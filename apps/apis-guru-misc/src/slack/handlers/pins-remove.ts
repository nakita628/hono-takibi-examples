import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsRemoveHandler = app.openapi(postPinsRemoveRoute, (c) => {
  throw new Error('Not implemented')
})
