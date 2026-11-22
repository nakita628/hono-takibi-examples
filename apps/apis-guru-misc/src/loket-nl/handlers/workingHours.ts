import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdWorkinghoursRoute,
  getProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdWorkinghoursRoute,
  putProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workingHoursHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdWorkinghoursRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdWorkinghoursRoute, (c) => {
    throw new Error('Not implemented')
  })
