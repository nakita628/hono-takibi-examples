import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEndpointsRoute,
  getRoute,
  getSchemasEntityRoute,
  getSchemasFiltersFilterNameRoute,
  getSchemasPluginsPluginNameRoute,
  getSchemasVaultsVaultNameRoute,
  getStatusDnsRoute,
  getStatusRoute,
  getTimersRoute,
  headEndpointRoute,
  optionsEndpointRoute,
  postSchemasEntityValidateRoute,
  postSchemasPluginsValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const informationHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getTimersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasVaultsVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
