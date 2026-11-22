import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDServicePrincipalsObjectIdRoute,
  getTenantIDServicePrincipalsObjectIdRoute,
  getTenantIDServicePrincipalsRoute,
  patchTenantIDServicePrincipalsObjectIdRoute,
  postTenantIDServicePrincipalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalHandler = app
  .openapi(getTenantIDServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDServicePrincipalsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDServicePrincipalsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
