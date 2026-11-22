import { OpenAPIHono } from '@hono/zod-openapi'
import { getSlidesGraphicsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const slidesGraphicsHandler = app.openapi(getSlidesGraphicsIdRoute, (c) => {
  throw new Error('Not implemented')
})
