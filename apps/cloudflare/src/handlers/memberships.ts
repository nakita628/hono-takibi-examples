import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMembershipsMembershipIdRoute,
  getMembershipsMembershipIdRoute,
  getMembershipsRoute,
  putMembershipsMembershipIdRoute,
} from '../routes'

export const getMembershipsRouteHandler: RouteHandler<typeof getMembershipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMembershipsMembershipIdRouteHandler: RouteHandler<
  typeof deleteMembershipsMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMembershipsMembershipIdRouteHandler: RouteHandler<
  typeof getMembershipsMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMembershipsMembershipIdRouteHandler: RouteHandler<
  typeof putMembershipsMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
