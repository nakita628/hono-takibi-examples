import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFaxApplicationsIdRoute,
  getFaxApplicationsIdRoute,
  getFaxApplicationsRoute,
  patchFaxApplicationsIdRoute,
  postFaxApplicationsRoute,
} from '../routes'

export const getFaxApplicationsRouteHandler: RouteHandler<typeof getFaxApplicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFaxApplicationsRouteHandler: RouteHandler<
  typeof postFaxApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFaxApplicationsIdRouteHandler: RouteHandler<
  typeof deleteFaxApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFaxApplicationsIdRouteHandler: RouteHandler<
  typeof getFaxApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFaxApplicationsIdRouteHandler: RouteHandler<
  typeof patchFaxApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
