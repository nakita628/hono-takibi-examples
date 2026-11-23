import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsListRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsListHandler = app.openapi(postPinsListRoute, (c) => {
  throw new Error('Not implemented')
})
