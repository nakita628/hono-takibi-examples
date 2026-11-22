import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTimesheetApprovalStatusesRoute,
  getTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
  postTimesheetApprovalStatusesRoute,
  putTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timesheetApprovalStatusesHandler = app
  .openapi(getTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimesheetApprovalStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetApprovalStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
