import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesElasticCloudAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesElasticCloudAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesElasticCloudAccountsRoute,
  patchApiV2IntegrationInterfacesElasticCloudAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesElasticCloudAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const elasticCloudIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesElasticCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesElasticCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesElasticCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesElasticCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesElasticCloudAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
