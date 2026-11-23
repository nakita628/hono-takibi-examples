import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMembershipsIdRoute,
  getMembershipsIdRoute,
  putMembershipsIdRoute,
} from '../routes'

export const deleteMembershipsIdRouteHandler: RouteHandler<
  typeof deleteMembershipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMembershipsIdRouteHandler: RouteHandler<typeof getMembershipsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putMembershipsIdRouteHandler: RouteHandler<typeof putMembershipsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
