import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute,
  patchServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
  postServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsDelegatedPermissionClassificationHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsDelegatedPermissionClassificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdDelegatedPermissionClassificationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
