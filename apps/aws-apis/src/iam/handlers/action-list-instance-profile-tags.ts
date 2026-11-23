import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListInstanceProfileTagsRoute,
  postActionListInstanceProfileTagsRoute,
} from '../routes'

export const getActionListInstanceProfileTagsRouteHandler: RouteHandler<
  typeof getActionListInstanceProfileTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListInstanceProfileTagsRouteHandler: RouteHandler<
  typeof postActionListInstanceProfileTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
