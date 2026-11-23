import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminConfigPropertiesPropertyNameRoute,
  deleteAdminLoggersLoggerRoute,
  deleteAdminRoleMappingsPrincipalIdRoute,
  deleteAdminRulesRoute,
  deleteAdminRulesRuleRoute,
  getAdminArtifactTypesRoute,
  getAdminConfigPropertiesPropertyNameRoute,
  getAdminConfigPropertiesRoute,
  getAdminExportRoute,
  getAdminLoggersLoggerRoute,
  getAdminLoggersRoute,
  getAdminRoleMappingsPrincipalIdRoute,
  getAdminRoleMappingsRoute,
  getAdminRulesRoute,
  getAdminRulesRuleRoute,
  postAdminImportRoute,
  postAdminRoleMappingsRoute,
  postAdminRulesRoute,
  putAdminConfigPropertiesPropertyNameRoute,
  putAdminLoggersLoggerRoute,
  putAdminRoleMappingsPrincipalIdRoute,
  putAdminRulesRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminArtifactTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(deleteAdminRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
