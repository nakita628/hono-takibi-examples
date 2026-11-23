import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeFpgaImageAttributeRoute,
  postActionDescribeFpgaImageAttributeRoute,
} from '../routes'

export const getActionDescribeFpgaImageAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeFpgaImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFpgaImageAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeFpgaImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
