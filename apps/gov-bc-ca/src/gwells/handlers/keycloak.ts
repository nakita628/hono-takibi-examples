import type { RouteHandler } from '@hono/zod-openapi'
import type { getKeycloakRoute } from '../routes'

export const getKeycloakRouteHandler: RouteHandler<typeof getKeycloakRoute> = async (c) => {
  throw new Error('Not implemented')
}
