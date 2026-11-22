import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventConfigurationsRoute, patchEventConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventConfigurationsHandler = app
  .openapi(getEventConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
