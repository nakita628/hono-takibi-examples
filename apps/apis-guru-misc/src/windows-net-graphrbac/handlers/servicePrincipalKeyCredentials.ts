import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantIDServicePrincipalsObjectIdKeyCredentialsRoute,
  patchTenantIDServicePrincipalsObjectIdKeyCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalKeyCredentialsHandler = app
  .openapi(getTenantIDServicePrincipalsObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDServicePrincipalsObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
