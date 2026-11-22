import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdLeavetypesLeaveTypeIdRoute,
  getProvidersEmployersEmployerIdLeavetypesRoute,
  putProvidersEmployersEmployerIdLeavetypesLeaveTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaveTypesHandler = app
  .openapi(getProvidersEmployersEmployerIdLeavetypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdLeavetypesLeaveTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdLeavetypesLeaveTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
