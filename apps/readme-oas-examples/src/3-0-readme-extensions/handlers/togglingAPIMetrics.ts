import { OpenAPIHono } from '@hono/zod-openapi'
import { patchXMetricsEnabledRoute, postXMetricsEnabledRoute } from '../routes'

const app = new OpenAPIHono()

export const togglingAPIMetricsHandler = app
  .openapi(postXMetricsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchXMetricsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
