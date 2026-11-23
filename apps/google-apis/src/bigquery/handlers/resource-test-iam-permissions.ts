import type { RouteHandler } from '@hono/zod-openapi'
import type { postResourceTestIamPermissionsRoute } from '../routes'

export const postResourceTestIamPermissionsRouteHandler: RouteHandler<
  typeof postResourceTestIamPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
