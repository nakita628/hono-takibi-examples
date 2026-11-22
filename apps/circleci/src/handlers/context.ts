import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContextContextIdEnvironmentVariableEnvVarNameRoute,
  deleteContextContextIdRestrictionsRestrictionIdRoute,
  deleteContextContextIdRoute,
  getContextContextIdEnvironmentVariableRoute,
  getContextContextIdRestrictionsRoute,
  getContextContextIdRoute,
  getContextRoute,
  postContextContextIdRestrictionsRoute,
  postContextRoute,
  putContextContextIdEnvironmentVariableEnvVarNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contextHandler = app
  .openapi(postContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContextContextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContextContextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContextContextIdEnvironmentVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContextContextIdEnvironmentVariableEnvVarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContextContextIdEnvironmentVariableEnvVarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContextContextIdRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContextContextIdRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContextContextIdRestrictionsRestrictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
