import { OpenAPIHono } from '@hono/zod-openapi'
import { getRouteOutputFormatRoute, postRouteOutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const routeOutputFormatHandler = app
  .openapi(getRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
