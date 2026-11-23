import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMembersIdRoute,
  getMembersIdRoute,
  getMembersRoute,
  postMembersDisassociateIdRoute,
  postMembersRoute,
} from '../routes'

export const postMembersRouteHandler: RouteHandler<typeof postMembersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMembersRouteHandler: RouteHandler<typeof getMembersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMembersIdRouteHandler: RouteHandler<typeof deleteMembersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMembersIdRouteHandler: RouteHandler<typeof getMembersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMembersDisassociateIdRouteHandler: RouteHandler<
  typeof postMembersDisassociateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
