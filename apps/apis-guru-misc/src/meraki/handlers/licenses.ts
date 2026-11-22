import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdLicensesLicenseIdRoute,
  getOrganizationsOrganizationIdLicensesRoute,
  getOrganizationsOrganizationIdLicenseStateRoute,
  postOrganizationsOrganizationIdLicensesAssignSeatsRoute,
  postOrganizationsOrganizationIdLicensesMoveSeatsRoute,
  postOrganizationsOrganizationIdLicensesRenewSeatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getOrganizationsOrganizationIdLicenseStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesAssignSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesMoveSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensesRenewSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdLicensesLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
