import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRoute,
  getTenantIDServicePrincipalsObjectIdOwnersRoute,
  postTenantIDServicePrincipalsObjectIdLinksOwnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalOwnersHandler = app
  .openapi(postTenantIDServicePrincipalsObjectIdLinksOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
