import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsInfoHandler = app.openapi(postPinsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
