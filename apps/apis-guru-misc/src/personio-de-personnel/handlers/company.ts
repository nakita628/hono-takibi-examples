import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompanyAttendancesIdRoute,
  deleteCompanyTimeOffsIdRoute,
  getCompanyAttendancesRoute,
  getCompanyEmployeesEmployeeIdProfilePictureWidthRoute,
  getCompanyEmployeesEmployeeIdRoute,
  getCompanyEmployeesRoute,
  getCompanyTimeOffsIdRoute,
  getCompanyTimeOffsRoute,
  getCompanyTimeOffTypesRoute,
  patchCompanyAttendancesIdRoute,
  postCompanyAttendancesRoute,
  postCompanyEmployeesRoute,
  postCompanyTimeOffsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyHandler = app
  .openapi(getCompanyAttendancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyAttendancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyAttendancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompanyAttendancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdProfilePictureWidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyTimeOffTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyTimeOffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyTimeOffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyTimeOffsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyTimeOffsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
