import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLeaveApplicationsLeaveApplicationIDRoute,
  getLeaveApplicationsRoute,
  getLeaveApplicationsV2Route,
  postLeaveApplicationsLeaveApplicationIDApproveRoute,
  postLeaveApplicationsLeaveApplicationIDRejectRoute,
  postLeaveApplicationsLeaveApplicationIDRoute,
  postLeaveApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaveApplicationsHandler = app
  .openapi(getLeaveApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveApplicationsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveApplicationsLeaveApplicationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsLeaveApplicationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsLeaveApplicationIDApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveApplicationsLeaveApplicationIDRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
