import { OpenAPIHono } from '@hono/zod-openapi'
import { getIntegrationsIndexRoute, getTargetsTargetIdIntegrationsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
