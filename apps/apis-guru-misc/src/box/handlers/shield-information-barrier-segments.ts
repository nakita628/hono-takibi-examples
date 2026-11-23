import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
  getShieldInformationBarrierSegmentsRoute,
  getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
  postShieldInformationBarrierSegmentsRoute,
  putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shieldInformationBarrierSegmentsHandler = app
  .openapi(getShieldInformationBarrierSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShieldInformationBarrierSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
