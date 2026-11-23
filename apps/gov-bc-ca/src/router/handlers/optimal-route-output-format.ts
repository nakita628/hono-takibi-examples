import { OpenAPIHono } from '@hono/zod-openapi'
import { getOptimalRouteOutputFormatRoute, postOptimalRouteOutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const optimalRouteOutputFormatHandler = app
  .openapi(getOptimalRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOptimalRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
