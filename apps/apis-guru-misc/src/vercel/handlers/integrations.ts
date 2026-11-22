import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IntegrationsConfigurationIdRoute,
  getV1IntegrationsConfigurationIdRoute,
  getV1IntegrationsConfigurationsRoute,
  getV1IntegrationsGitNamespacesRoute,
  getV1IntegrationsSearchRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(deleteV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsGitNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsSearchRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
