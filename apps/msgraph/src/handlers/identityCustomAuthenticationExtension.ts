import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdRoute,
  getIdentityCustomAuthenticationExtensionsCountRoute,
  getIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdRoute,
  getIdentityCustomAuthenticationExtensionsRoute,
  patchIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdRoute,
  postIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdValidateAuthenticationConfigurationRoute,
  postIdentityCustomAuthenticationExtensionsRoute,
  postIdentityCustomAuthenticationExtensionsValidateAuthenticationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityCustomAuthenticationExtensionHandler = app
  .openapi(getIdentityCustomAuthenticationExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityCustomAuthenticationExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityCustomAuthenticationExtensionsCustomAuthenticationExtensionIdValidateAuthenticationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityCustomAuthenticationExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postIdentityCustomAuthenticationExtensionsValidateAuthenticationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
