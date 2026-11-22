import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectGlobalLicenseCodesLicenseCodeRoute,
  postProjectsProjectGlobalLicenseCodesResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseCodesHandler = app
  .openapi(getProjectsProjectGlobalLicenseCodesLicenseCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalLicenseCodesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
