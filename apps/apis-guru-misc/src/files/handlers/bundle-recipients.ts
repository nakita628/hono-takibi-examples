import type { RouteHandler } from '@hono/zod-openapi'
import type { getBundleRecipientsRoute, postBundleRecipientsRoute } from '../routes'

export const getBundleRecipientsRouteHandler: RouteHandler<
  typeof getBundleRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBundleRecipientsRouteHandler: RouteHandler<
  typeof postBundleRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
