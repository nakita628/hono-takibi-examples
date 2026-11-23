import { OpenAPIHono } from '@hono/zod-openapi'
import { getRouteAmbientDoseRoute, getRouteEffectiveDoseRoute } from '../routes'

const app = new OpenAPIHono()

export const routeHandler = app
  .openapi(getRouteAmbientDoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRouteEffectiveDoseRoute, (c) => {
    throw new Error('Not implemented')
  })
