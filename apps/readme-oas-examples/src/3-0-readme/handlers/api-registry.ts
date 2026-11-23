import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiRegistryUuidRoute } from '../routes'

export const getApiRegistryUuidRouteHandler: RouteHandler<typeof getApiRegistryUuidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
