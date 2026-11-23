import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetSubUserKeysRoute } from '../routes'

export const getGetSubUserKeysRouteHandler: RouteHandler<typeof getGetSubUserKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
