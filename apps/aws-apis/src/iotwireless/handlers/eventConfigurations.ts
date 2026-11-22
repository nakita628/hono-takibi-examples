import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventConfigurationsIdentifierIdentifierTypeRoute,
  patchEventConfigurationsIdentifierIdentifierTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventConfigurationsHandler = app
  .openapi(getEventConfigurationsIdentifierIdentifierTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventConfigurationsIdentifierIdentifierTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
