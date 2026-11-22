import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdScimV2ResourceTypesResourceTypeIdRoute,
  getAccountsAccountIdScimV2ResourceTypesRoute,
  getAccountsAccountIdScimV2SchemasRoute,
  getAccountsAccountIdScimV2SchemasSchemaIdRoute,
  getAccountsAccountIdScimV2ServiceProviderConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scimDiscoveryHandler = app
  .openapi(getAccountsAccountIdScimV2ResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdScimV2ResourceTypesResourceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdScimV2SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdScimV2SchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdScimV2ServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
