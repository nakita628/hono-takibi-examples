import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdministeredIdentitiesMeApiKeysRoute,
  getAdministeredIdentitiesMeRoute,
  getAdministeredLicensingSubscriptionEntitlementsRoute,
  getAdministeredLicensingSubscriptionSubscriptionsComplianceStatusesRoute,
  getAdministeredLicensingSubscriptionSubscriptionsRoute,
  postAdministeredIdentitiesMeApiKeysGenerateRoute,
  postAdministeredIdentitiesMeApiKeysSuffixRevokeRoute,
  postAdministeredLicensingSubscriptionSubscriptionsClaimKeyValidateRoute,
  postAdministeredLicensingSubscriptionSubscriptionsClaimRoute,
  postAdministeredLicensingSubscriptionSubscriptionsSubscriptionIdBindRoute,
} from '../routes'

const app = new OpenAPIHono()

export const administeredHandler = app
  .openapi(getAdministeredIdentitiesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministeredIdentitiesMeApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministeredIdentitiesMeApiKeysGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministeredIdentitiesMeApiKeysSuffixRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministeredLicensingSubscriptionEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministeredLicensingSubscriptionSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministeredLicensingSubscriptionSubscriptionsClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministeredLicensingSubscriptionSubscriptionsClaimKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministeredLicensingSubscriptionSubscriptionsComplianceStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministeredLicensingSubscriptionSubscriptionsSubscriptionIdBindRoute, (c) => {
    throw new Error('Not implemented')
  })
