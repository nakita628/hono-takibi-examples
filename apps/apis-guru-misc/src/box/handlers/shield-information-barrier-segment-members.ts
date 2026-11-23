import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
  getShieldInformationBarrierSegmentMembersRoute,
  getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
  postShieldInformationBarrierSegmentMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shieldInformationBarrierSegmentMembersHandler = app
  .openapi(getShieldInformationBarrierSegmentMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShieldInformationBarrierSegmentMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
