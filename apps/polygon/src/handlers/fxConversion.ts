import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConversionFromToRoute } from '../routes'

const app = new OpenAPIHono()

export const fxConversionHandler = app.openapi(getV1ConversionFromToRoute, (c) => {
  throw new Error('Not implemented')
})
