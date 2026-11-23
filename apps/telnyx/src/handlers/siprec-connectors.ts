import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSiprecConnectorsConnectorNameRoute,
  getSiprecConnectorsConnectorNameRoute,
  postSiprecConnectorsRoute,
  putSiprecConnectorsConnectorNameRoute,
} from '../routes'

export const postSiprecConnectorsRouteHandler: RouteHandler<
  typeof postSiprecConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSiprecConnectorsConnectorNameRouteHandler: RouteHandler<
  typeof deleteSiprecConnectorsConnectorNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSiprecConnectorsConnectorNameRouteHandler: RouteHandler<
  typeof getSiprecConnectorsConnectorNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSiprecConnectorsConnectorNameRouteHandler: RouteHandler<
  typeof putSiprecConnectorsConnectorNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
