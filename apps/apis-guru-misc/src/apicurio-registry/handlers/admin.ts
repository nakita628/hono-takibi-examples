import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminConfigPropertiesPropertyNameRoute,
  deleteAdminLoggersLoggerRoute,
  deleteAdminRoleMappingsPrincipalIdRoute,
  getAdminConfigPropertiesPropertyNameRoute,
  getAdminConfigPropertiesRoute,
  getAdminExportRoute,
  getAdminLoggersLoggerRoute,
  getAdminLoggersRoute,
  getAdminRoleMappingsPrincipalIdRoute,
  getAdminRoleMappingsRoute,
  postAdminImportRoute,
  postAdminRoleMappingsRoute,
  putAdminConfigPropertiesPropertyNameRoute,
  putAdminLoggersLoggerRoute,
  putAdminRoleMappingsPrincipalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminConfigPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminConfigPropertiesPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigPropertiesPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminConfigPropertiesPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLoggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminLoggersLoggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLoggersLoggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminLoggersLoggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRoleMappingsPrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRoleMappingsPrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRoleMappingsPrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
