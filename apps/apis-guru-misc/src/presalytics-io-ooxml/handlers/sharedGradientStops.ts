import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedGradientStopsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedGradientStopsHandler = app.openapi(getSharedGradientStopsIdRoute, (c) => {
  throw new Error('Not implemented')
})
