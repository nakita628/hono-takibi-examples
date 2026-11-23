import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetupBeneficiaryRoute } from '../routes'

export const postSetupBeneficiaryRouteHandler: RouteHandler<
  typeof postSetupBeneficiaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
