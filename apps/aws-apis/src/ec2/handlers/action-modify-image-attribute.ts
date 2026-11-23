import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyImageAttributeRoute,
  postActionModifyImageAttributeRoute,
} from '../routes'

export const getActionModifyImageAttributeRouteHandler: RouteHandler<
  typeof getActionModifyImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyImageAttributeRouteHandler: RouteHandler<
  typeof postActionModifyImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
