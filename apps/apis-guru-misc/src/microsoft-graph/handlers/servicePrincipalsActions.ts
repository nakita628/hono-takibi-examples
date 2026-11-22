import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postServicePrincipalsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postServicePrincipalsMicrosoftGraphGetByIdsRoute,
  postServicePrincipalsMicrosoftGraphValidatePropertiesRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphAddKeyRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphAddPasswordRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphAddTokenSigningCertificateRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberGroupsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberObjectsRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphRemoveKeyRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphRemovePasswordRoute,
  postServicePrincipalsServicePrincipalIdMicrosoftGraphRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsActionsHandler = app
  .openapi(postServicePrincipalsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphAddKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphAddPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postServicePrincipalsServicePrincipalIdMicrosoftGraphAddTokenSigningCertificateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphRemoveKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphRemovePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
