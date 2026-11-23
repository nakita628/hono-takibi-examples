import type { RouteHandler } from '@hono/zod-openapi'
import type { postPhoneEnrichRoute } from '../routes'

export const postPhoneEnrichRouteHandler: RouteHandler<typeof postPhoneEnrichRoute> = async (c) => {
  throw new Error('Not implemented')
}
