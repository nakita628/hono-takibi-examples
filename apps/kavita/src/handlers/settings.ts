import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSettingsBaseUrlRoute,
  getApiSettingsIsEmailSetupRoute,
  getApiSettingsIsValidCronRoute,
  getApiSettingsKepubifySupportedRoute,
  getApiSettingsKoboEnabledRoute,
  getApiSettingsLibraryTypesRoute,
  getApiSettingsLogLevelsRoute,
  getApiSettingsMetadataSettingsRoute,
  getApiSettingsOidcRoute,
  getApiSettingsOpdsEnabledRoute,
  getApiSettingsRoute,
  getApiSettingsTaskFrequenciesRoute,
  postApiSettingsImportFieldMappingsRoute,
  postApiSettingsIsValidAuthorityRoute,
  postApiSettingsKepubifyRoute,
  postApiSettingsMetadataSettingsRoute,
  postApiSettingsResetBaseUrlRoute,
  postApiSettingsResetExternalIdsRoute,
  postApiSettingsResetIpAddressesRoute,
  postApiSettingsResetRoute,
  postApiSettingsRoute,
  postApiSettingsRunMetadataMappingsRoute,
  postApiSettingsTestEmailUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getApiSettingsBaseUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetBaseUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsIsEmailSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsTaskFrequenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsLibraryTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsLogLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsOpdsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsKoboEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsKepubifySupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsKepubifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsIsValidCronRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsTestEmailUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsMetadataSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsMetadataSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsRunMetadataMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsImportFieldMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsOidcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetExternalIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsIsValidAuthorityRoute, (c) => {
    throw new Error('Not implemented')
  })
