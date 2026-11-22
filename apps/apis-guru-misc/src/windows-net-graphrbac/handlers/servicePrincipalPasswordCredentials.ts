import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute,
  patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalPasswordCredentialsHandler = app
  .openapi(getTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
