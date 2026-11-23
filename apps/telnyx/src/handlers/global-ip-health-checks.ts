import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGlobalIpHealthChecksIdRoute,
  getGlobalIpHealthChecksIdRoute,
  getGlobalIpHealthChecksRoute,
  postGlobalIpHealthChecksRoute,
} from '../routes'

export const getGlobalIpHealthChecksRouteHandler: RouteHandler<
  typeof getGlobalIpHealthChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGlobalIpHealthChecksRouteHandler: RouteHandler<
  typeof postGlobalIpHealthChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGlobalIpHealthChecksIdRouteHandler: RouteHandler<
  typeof deleteGlobalIpHealthChecksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGlobalIpHealthChecksIdRouteHandler: RouteHandler<
  typeof getGlobalIpHealthChecksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
