import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchemasEntityRoute,
  getSchemasFiltersFilterNameRoute,
  getSchemasPluginsPluginNameRoute,
  getSchemasVaultsVaultNameRoute,
  postSchemasEntityValidateRoute,
  postSchemasPluginsValidateRoute,
  postSchemasVaultsVaultNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(getSchemasEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemasEntityValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasFiltersFilterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasPluginsPluginNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemasPluginsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasVaultsVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemasVaultsVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
