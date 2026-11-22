import { OpenAPIHono } from '@hono/zod-openapi'
import { getSlidesGroupElementsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const slidesGroupElementsHandler = app.openapi(getSlidesGroupElementsIdRoute, (c) => {
  throw new Error('Not implemented')
})
