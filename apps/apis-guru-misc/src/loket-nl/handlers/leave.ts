import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsLeaveLeaveIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveDefaultsRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveMetadataRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveOverviewYearRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveProposedleavehoursRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveRoute,
  getProvidersEmployersEmployeesEmploymentsLeaveLeaveIdMetadataRoute,
  getProvidersEmployersEmployeesEmploymentsLeaveLeaveIdRoute,
  getProvidersEmployersEmployerIdLeaveProposedleavehoursRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveRoute,
  putProvidersEmployersEmployeesEmploymentsLeaveLeaveIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaveHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsLeaveLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsLeaveLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsLeaveLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsLeaveLeaveIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveOverviewYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveProposedleavehoursRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployerIdLeaveProposedleavehoursRoute, (c) => {
    throw new Error('Not implemented')
  })
