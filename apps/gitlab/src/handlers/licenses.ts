import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4LicenseIdRoute,
  deleteApiV4ProjectsIdManagedLicensesManagedLicenseIdRoute,
  getApiV4LicenseIdRoute,
  getApiV4LicenseRoute,
  getApiV4LicensesRoute,
  getApiV4LicenseUsageExportRoute,
  getApiV4ProjectsIdManagedLicensesManagedLicenseIdRoute,
  getApiV4ProjectsIdManagedLicensesRoute,
  patchApiV4ProjectsIdManagedLicensesManagedLicenseIdRoute,
  postApiV4LicenseRoute,
  postApiV4ProjectsIdManagedLicensesRoute,
  putApiV4LicenseIdRefreshBillableUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getApiV4ProjectsIdManagedLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdManagedLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdManagedLicensesManagedLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdManagedLicensesManagedLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdManagedLicensesManagedLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4LicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4LicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4LicenseUsageExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4LicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4LicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4LicenseIdRefreshBillableUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4LicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
