import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTargetsTargetIdIntegrationsSlackIndexRoute,
  patchTargetsTargetIdIntegrationsSlackIndexRoute,
  putTargetsTargetIdIntegrationsSlackIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slackIntegrationHandler = app
  .openapi(getTargetsTargetIdIntegrationsSlackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdIntegrationsSlackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdIntegrationsSlackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
