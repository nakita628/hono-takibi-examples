import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInfringementClaimsClaimIdRoute,
  postInfringementClaimsClaimIdContestRoute,
} from '../routes'

export const getInfringementClaimsClaimIdRouteHandler: RouteHandler<
  typeof getInfringementClaimsClaimIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInfringementClaimsClaimIdContestRouteHandler: RouteHandler<
  typeof postInfringementClaimsClaimIdContestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
