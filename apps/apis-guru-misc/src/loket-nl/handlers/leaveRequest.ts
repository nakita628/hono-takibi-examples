import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaverequestsRoute,
  getProvidersEmployersEmployeesEmploymentsLeaverequestsLeaveRequestIdRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsLeaverequestsRoute,
  patchProvidersEmployersEmployeesEmploymentsLeaverequestsRoute,
  putProvidersEmployersEmployeesEmploymentsLeaverequestsLeaveRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaveRequestHandler = app
  .openapi(patchProvidersEmployersEmployeesEmploymentsLeaverequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsLeaverequestsLeaveRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsLeaverequestsLeaveRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaverequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsLeaverequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
