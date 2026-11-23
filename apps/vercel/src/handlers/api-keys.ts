import type { RouteHandler } from '@hono/zod-openapi'
import type { patchApiKeysApiKeyIDQuotaRoute, postApiKeysRoute } from '../routes'

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiKeysApiKeyIDQuotaRouteHandler: RouteHandler<
  typeof patchApiKeysApiKeyIDQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
