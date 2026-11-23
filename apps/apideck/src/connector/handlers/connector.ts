import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConnectorApisIdResourcesResourceIdCoverageRoute,
  getConnectorApisIdResourcesResourceIdRoute,
  getConnectorApisIdRoute,
  getConnectorApisRoute,
  getConnectorConnectorsIdDocsDocIdRoute,
  getConnectorConnectorsIdResourcesResourceIdRoute,
  getConnectorConnectorsIdRoute,
  getConnectorConnectorsRoute,
} from '../routes'

export const getConnectorApisRouteHandler: RouteHandler<typeof getConnectorApisRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getConnectorApisIdRouteHandler: RouteHandler<typeof getConnectorApisIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getConnectorApisIdResourcesResourceIdRouteHandler: RouteHandler<
  typeof getConnectorApisIdResourcesResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectorApisIdResourcesResourceIdCoverageRouteHandler: RouteHandler<
  typeof getConnectorApisIdResourcesResourceIdCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectorConnectorsRouteHandler: RouteHandler<
  typeof getConnectorConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectorConnectorsIdRouteHandler: RouteHandler<
  typeof getConnectorConnectorsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectorConnectorsIdDocsDocIdRouteHandler: RouteHandler<
  typeof getConnectorConnectorsIdDocsDocIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectorConnectorsIdResourcesResourceIdRouteHandler: RouteHandler<
  typeof getConnectorConnectorsIdResourcesResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
