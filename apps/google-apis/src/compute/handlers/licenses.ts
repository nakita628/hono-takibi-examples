import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalLicensesLicenseRoute,
  getProjectsProjectGlobalLicensesLicenseRoute,
  getProjectsProjectGlobalLicensesResourceGetIamPolicyRoute,
  getProjectsProjectGlobalLicensesRoute,
  postProjectsProjectGlobalLicensesResourceSetIamPolicyRoute,
  postProjectsProjectGlobalLicensesResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getProjectsProjectGlobalLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalLicensesLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalLicensesLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalLicensesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalLicensesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalLicensesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
