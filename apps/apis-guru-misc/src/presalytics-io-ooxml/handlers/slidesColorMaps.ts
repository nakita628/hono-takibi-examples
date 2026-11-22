import { OpenAPIHono } from '@hono/zod-openapi'
import { getSlidesColorMapsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const slidesColorMapsHandler = app.openapi(getSlidesColorMapsIdRoute, (c) => {
  throw new Error('Not implemented')
})
