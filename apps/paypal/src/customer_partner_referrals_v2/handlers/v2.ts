import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2CustomerPartnerReferralsPartnerReferralIdRoute,
  postV2CustomerPartnerReferralsRoute,
} from '../routes'

export const postV2CustomerPartnerReferralsRouteHandler: RouteHandler<
  typeof postV2CustomerPartnerReferralsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomerPartnerReferralsPartnerReferralIdRouteHandler: RouteHandler<
  typeof getV2CustomerPartnerReferralsPartnerReferralIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
