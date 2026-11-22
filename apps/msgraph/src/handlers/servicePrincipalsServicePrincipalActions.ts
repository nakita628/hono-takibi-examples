import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postServicePrincipalsGetAvailableExtensionPropertiesRoute,
  postServicePrincipalsGetByIdsRoute,
  postServicePrincipalsServicePrincipalIdAddKeyRoute,
  postServicePrincipalsServicePrincipalIdAddPasswordRoute,
  postServicePrincipalsServicePrincipalIdAddTokenSigningCertificateRoute,
  postServicePrincipalsServicePrincipalIdCheckMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdCheckMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdGetMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdGetMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdRemoveKeyRoute,
  postServicePrincipalsServicePrincipalIdRemovePasswordRoute,
  postServicePrincipalsServicePrincipalIdRestoreRoute,
  postServicePrincipalsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsServicePrincipalActionsHandler = app
  .openapi(postServicePrincipalsServicePrincipalIdAddKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdAddPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdAddTokenSigningCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdRemoveKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdRemovePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
