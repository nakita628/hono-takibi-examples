import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute,
  patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationKeyCredentialsHandler = app
  .openapi(getTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
