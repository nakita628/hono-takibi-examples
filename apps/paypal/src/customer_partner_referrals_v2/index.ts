import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CustomerPartnerReferralsPartnerReferralIdRoute,
  postV2CustomerPartnerReferralsRoute,
} from './routes'
import {
  getV2CustomerPartnerReferralsPartnerReferralIdRouteHandler,
  postV2CustomerPartnerReferralsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2CustomerPartnerReferralsRoute, postV2CustomerPartnerReferralsRouteHandler)
  .openapi(
    getV2CustomerPartnerReferralsPartnerReferralIdRoute,
    getV2CustomerPartnerReferralsPartnerReferralIdRouteHandler,
  )

export default app
