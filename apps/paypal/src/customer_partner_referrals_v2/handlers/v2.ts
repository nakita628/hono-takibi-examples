import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CustomerPartnerReferralsPartnerReferralIdRoute,
  postV2CustomerPartnerReferralsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2CustomerPartnerReferralsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerPartnerReferralsPartnerReferralIdRoute, (c) => {
    throw new Error('Not implemented')
  })
