import type { RouteHandler } from '@hono/zod-openapi'
import type { getBeneficiariesRoute } from '../routes'

export const getBeneficiariesRouteHandler: RouteHandler<typeof getBeneficiariesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
