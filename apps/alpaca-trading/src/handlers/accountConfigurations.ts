import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2AccountConfigurationsRoute, patchV2AccountConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountConfigurationsHandler = app
  .openapi(getV2AccountConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AccountConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
