import type { RouteHandler } from '@hono/zod-openapi'
import type { getKeycloakConfigRoute } from '../routes'

export const getKeycloakConfigRouteHandler: RouteHandler<typeof getKeycloakConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
