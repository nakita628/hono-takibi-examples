import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesSnowflakeAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesSnowflakeAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesSnowflakeAccountsRoute,
  patchApiV2IntegrationInterfacesSnowflakeAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesSnowflakeAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snowflakeIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesSnowflakeAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesSnowflakeAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesSnowflakeAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesSnowflakeAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesSnowflakeAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
