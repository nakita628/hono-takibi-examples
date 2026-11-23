import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsDeleteHandler = app.openapi(postPinsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
