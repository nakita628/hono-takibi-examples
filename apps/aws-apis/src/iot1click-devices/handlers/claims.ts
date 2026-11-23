import type { RouteHandler } from '@hono/zod-openapi'
import type { putClaimsClaimCodeRoute } from '../routes'

export const putClaimsClaimCodeRouteHandler: RouteHandler<typeof putClaimsClaimCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
