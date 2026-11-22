import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntegrationsGrafanaDashboardsUidRoute,
  getIntegrationsGrafanaFoldersRoute,
  getIntegrationsGrafanaStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsGrafanaStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsGrafanaFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsGrafanaDashboardsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
