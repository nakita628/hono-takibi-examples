import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGroupsGroupIdRoute,
  getGroupsMultipleRoute,
  getGroupsRoute,
  postGroupsGroupIdAnswersRoute,
  postGroupsGroupIdContactRoute,
  postGroupsGroupIdUnsubscribeRoute,
  postGroupsSubscribeRoute,
} from '../routes'

export const getGroupsRouteHandler: RouteHandler<typeof getGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsMultipleRouteHandler: RouteHandler<typeof getGroupsMultipleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGroupsSubscribeRouteHandler: RouteHandler<
  typeof postGroupsSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdRouteHandler: RouteHandler<typeof getGroupsGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGroupsGroupIdAnswersRouteHandler: RouteHandler<
  typeof postGroupsGroupIdAnswersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsGroupIdContactRouteHandler: RouteHandler<
  typeof postGroupsGroupIdContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsGroupIdUnsubscribeRouteHandler: RouteHandler<
  typeof postGroupsGroupIdUnsubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
