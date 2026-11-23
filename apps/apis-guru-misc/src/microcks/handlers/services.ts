import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteServicesIdRoute,
  getServicesCountRoute,
  getServicesIdRoute,
  getServicesLabelsRoute,
  getServicesRoute,
  getServicesSearchRoute,
  putServicesIdMetadataRoute,
  putServicesIdOperationRoute,
} from '../routes'

export const getServicesRouteHandler: RouteHandler<typeof getServicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicesCountRouteHandler: RouteHandler<typeof getServicesCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServicesLabelsRouteHandler: RouteHandler<typeof getServicesLabelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServicesSearchRouteHandler: RouteHandler<typeof getServicesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteServicesIdRouteHandler: RouteHandler<typeof deleteServicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServicesIdRouteHandler: RouteHandler<typeof getServicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putServicesIdMetadataRouteHandler: RouteHandler<
  typeof putServicesIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putServicesIdOperationRouteHandler: RouteHandler<
  typeof putServicesIdOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
