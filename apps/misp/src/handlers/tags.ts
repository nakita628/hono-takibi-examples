import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTagsRoute,
  getTagsSearchTagSearchTermRoute,
  getTagsViewTagIdRoute,
  postTagsAddRoute,
  postTagsDeleteTagIdRoute,
  postTagsEditTagIdRoute,
} from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsViewTagIdRouteHandler: RouteHandler<typeof getTagsViewTagIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTagsAddRouteHandler: RouteHandler<typeof postTagsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsDeleteTagIdRouteHandler: RouteHandler<
  typeof postTagsDeleteTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsEditTagIdRouteHandler: RouteHandler<typeof postTagsEditTagIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTagsSearchTagSearchTermRouteHandler: RouteHandler<
  typeof getTagsSearchTagSearchTermRoute
> = async (c) => {
  throw new Error('Not implemented')
}
