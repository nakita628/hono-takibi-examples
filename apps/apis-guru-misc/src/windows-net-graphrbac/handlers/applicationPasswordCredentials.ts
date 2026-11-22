import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute,
  patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationPasswordCredentialsHandler = app
  .openapi(getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
