import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteContactContactIdRoute,
  getContactContactIdRoute,
  postContactRoute,
} from '../routes'

export const deleteContactContactIdRouteHandler: RouteHandler<
  typeof deleteContactContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactContactIdRouteHandler: RouteHandler<
  typeof getContactContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactRouteHandler: RouteHandler<typeof postContactRoute> = async (c) => {
  throw new Error('Not implemented')
}
