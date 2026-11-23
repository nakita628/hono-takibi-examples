import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteServiceProfilesIdRoute,
  getServiceProfilesIdRoute,
  getServiceProfilesRoute,
  postServiceProfilesRoute,
} from '../routes'

export const postServiceProfilesRouteHandler: RouteHandler<
  typeof postServiceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceProfilesRouteHandler: RouteHandler<typeof getServiceProfilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteServiceProfilesIdRouteHandler: RouteHandler<
  typeof deleteServiceProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceProfilesIdRouteHandler: RouteHandler<
  typeof getServiceProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
