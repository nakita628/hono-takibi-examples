import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsRoute,
  patchApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const temporalCloudOpenMetricsIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
