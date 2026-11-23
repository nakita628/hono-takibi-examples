import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyFpgaImageAttributeRoute,
  postActionModifyFpgaImageAttributeRoute,
} from '../routes'

export const getActionModifyFpgaImageAttributeRouteHandler: RouteHandler<
  typeof getActionModifyFpgaImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyFpgaImageAttributeRouteHandler: RouteHandler<
  typeof postActionModifyFpgaImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
