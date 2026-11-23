import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
  getShieldInformationBarrierSegmentRestrictionsRoute,
  getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
  postShieldInformationBarrierSegmentRestrictionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shieldInformationBarrierSegmentRestrictionsHandler = app
  .openapi(
    getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getShieldInformationBarrierSegmentRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShieldInformationBarrierSegmentRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
