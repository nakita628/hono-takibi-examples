import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCallControlApplicationsIdRoute,
  getCallControlApplicationsIdRoute,
  getCallControlApplicationsRoute,
  patchCallControlApplicationsIdRoute,
  postCallControlApplicationsRoute,
} from '../routes'

export const getCallControlApplicationsRouteHandler: RouteHandler<
  typeof getCallControlApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallControlApplicationsRouteHandler: RouteHandler<
  typeof postCallControlApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCallControlApplicationsIdRouteHandler: RouteHandler<
  typeof deleteCallControlApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallControlApplicationsIdRouteHandler: RouteHandler<
  typeof getCallControlApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCallControlApplicationsIdRouteHandler: RouteHandler<
  typeof patchCallControlApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
