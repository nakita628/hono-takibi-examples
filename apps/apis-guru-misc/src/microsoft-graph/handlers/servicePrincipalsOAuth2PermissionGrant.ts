import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsOAuth2PermissionGrantHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
