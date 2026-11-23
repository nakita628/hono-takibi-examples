import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIntegrationsGrafanaDashboardsUidRoute,
  getIntegrationsGrafanaFoldersRoute,
  getIntegrationsGrafanaStatusRoute,
} from '../routes'

export const getIntegrationsGrafanaStatusRouteHandler: RouteHandler<
  typeof getIntegrationsGrafanaStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntegrationsGrafanaFoldersRouteHandler: RouteHandler<
  typeof getIntegrationsGrafanaFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntegrationsGrafanaDashboardsUidRouteHandler: RouteHandler<
  typeof getIntegrationsGrafanaDashboardsUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
