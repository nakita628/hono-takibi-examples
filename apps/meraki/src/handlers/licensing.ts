import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdministeredLicensingSubscriptionEntitlementsRoute,
  getAdministeredLicensingSubscriptionSubscriptionsComplianceStatusesRoute,
  getAdministeredLicensingSubscriptionSubscriptionsRoute,
  getOrganizationsOrganizationIdLicensingCotermLicensesRoute,
  postAdministeredLicensingSubscriptionSubscriptionsClaimKeyValidateRoute,
  postAdministeredLicensingSubscriptionSubscriptionsClaimRoute,
  postAdministeredLicensingSubscriptionSubscriptionsSubscriptionIdBindRoute,
  postOrganizationsOrganizationIdLicensingCotermLicensesMoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licensingHandler = app
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
  .openapi(getOrganizationsOrganizationIdLicensingCotermLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLicensingCotermLicensesMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
