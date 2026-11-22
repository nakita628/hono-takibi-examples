import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2GlobalOrgsRoute,
  getApiV2OrgConfigsOrgConfigNameRoute,
  getApiV2OrgConfigsRoute,
  getApiV2OrgRoute,
  getApiV2SamlConfigurationsRoute,
  getApiV2SamlConfigurationsSamlConfigUuidRoute,
  patchApiV2OrgConfigsOrgConfigNameRoute,
  patchApiV2OrgSamlConfigurationsRoute,
  patchApiV2SamlConfigurationsSamlConfigUuidRoute,
  postApiV2SamlConfigurationsIdpMetadataRoute,
  putApiV2LoginOrgConfigsMaxSessionDurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getApiV2GlobalOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LoginOrgConfigsMaxSessionDurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgSamlConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgConfigsOrgConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgConfigsOrgConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SamlConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SamlConfigurationsIdpMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SamlConfigurationsSamlConfigUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SamlConfigurationsSamlConfigUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
