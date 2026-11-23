import { OpenAPIHono } from '@hono/zod-openapi'
import { getLeaveTypesLeaveTypeIDRoute, getLeaveTypesRoute, postLeaveTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const leaveTypesHandler = app
  .openapi(getLeaveTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveTypesLeaveTypeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
