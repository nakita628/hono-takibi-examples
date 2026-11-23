import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAuthsIdRoute,
  deleteApiCertificatesIdRoute,
  deleteApiClientValidatorsIdRoute,
  deleteApiDataExporterConfigsBulkRoute,
  deleteApiDataExporterConfigsDataExporterConfigIdRoute,
  deleteApiGroupsGroupIdApikeysClientIdQuotasRoute,
  deleteApiGroupsGroupIdApikeysClientIdRoute,
  deleteApiGroupsServiceGroupIdRoute,
  deleteApiScriptsScriptIdRoute,
  deleteApiServicesServiceIdApikeysClientIdQuotasRoute,
  deleteApiServicesServiceIdApikeysClientIdRoute,
  deleteApiServicesServiceIdRoute,
  deleteApiServicesServiceIdTargetsRoute,
  deleteApiServicesServiceIdTemplateRoute,
  deleteApiSnowmonkeyOutagesRoute,
  deleteApiVerifiersVerifierIdRoute,
  getApiApikeysRoute,
  getApiAuthsIdRoute,
  getApiAuthsRoute,
  getApiCertificatesIdRoute,
  getApiCertificatesRoute,
  getApiClientValidatorsIdRoute,
  getApiClientValidatorsRoute,
  getApiDataExporterConfigsDataExporterConfigIdRoute,
  getApiDataExporterConfigsRoute,
  getApiDataExporterConfigsTemplateRoute,
  getApiGlobalconfigRoute,
  getApiGroupsGroupIdApikeysClientIdQuotasRoute,
  getApiGroupsGroupIdApikeysClientIdRoute,
  getApiGroupsGroupIdApikeysRoute,
  getApiGroupsRoute,
  getApiGroupsServiceGroupIdRoute,
  getApiGroupsServiceGroupIdServicesRoute,
  getApiLiveIdRoute,
  getApiLiveRoute,
  getApiOtoroshiJsonRoute,
  getApiScriptsRoute,
  getApiScriptsScriptIdRoute,
  getApiServicesRoute,
  getApiServicesServiceIdApikeysClientIdGroupRoute,
  getApiServicesServiceIdApikeysClientIdQuotasRoute,
  getApiServicesServiceIdApikeysClientIdRoute,
  getApiServicesServiceIdApikeysRoute,
  getApiServicesServiceIdRoute,
  getApiServicesServiceIdTargetsRoute,
  getApiServicesServiceIdTemplateRoute,
  getApiSnowmonkeyConfigRoute,
  getApiSnowmonkeyOutagesRoute,
  getApiVerifiersRoute,
  getApiVerifiersVerifierIdRoute,
  patchApiAuthsIdRoute,
  patchApiCertificatesIdRoute,
  patchApiClientValidatorsIdRoute,
  patchApiDataExporterConfigsBulkRoute,
  patchApiDataExporterConfigsDataExporterConfigIdRoute,
  patchApiGlobalconfigRoute,
  patchApiGroupsGroupIdApikeysClientIdRoute,
  patchApiGroupsServiceGroupIdRoute,
  patchApiScriptsScriptIdRoute,
  patchApiServicesServiceIdApikeysClientIdRoute,
  patchApiServicesServiceIdRoute,
  patchApiServicesServiceIdTargetsRoute,
  patchApiSnowmonkeyConfigRoute,
  patchApiVerifiersVerifierIdRoute,
  postApiAuthsRoute,
  postApiCertificatesRoute,
  postApiClientValidatorsRoute,
  postApiDataExporterConfigsBulkRoute,
  postApiDataExporterConfigsRoute,
  postApiGroupsGroupIdApikeysRoute,
  postApiGroupsRoute,
  postApiImportRoute,
  postApiOtoroshiJsonRoute,
  postApiScriptsCompileRoute,
  postApiScriptsRoute,
  postApiServicesRoute,
  postApiServicesServiceIdApikeysRoute,
  postApiServicesServiceIdTargetsRoute,
  postApiServicesServiceIdTemplateRoute,
  postApiSnowmonkeyStartRoute,
  postApiSnowmonkeyStopRoute,
  postApiVerifiersRoute,
  putApiAuthsIdRoute,
  putApiCertificatesIdRoute,
  putApiClientValidatorsIdRoute,
  putApiDataExporterConfigsBulkRoute,
  putApiDataExporterConfigsDataExporterConfigIdRoute,
  putApiGlobalconfigRoute,
  putApiGroupsGroupIdApikeysClientIdRoute,
  putApiGroupsServiceGroupIdRoute,
  putApiScriptsScriptIdRoute,
  putApiServicesServiceIdApikeysClientIdRoute,
  putApiServicesServiceIdRoute,
  putApiServicesServiceIdTemplateRoute,
  putApiSnowmonkeyConfigRoute,
  putApiVerifiersVerifierIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientValidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientValidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataExporterConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataExporterConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataExporterConfigsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGlobalconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGlobalconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGlobalconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsGroupIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupsGroupIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGroupsGroupIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupsGroupIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsGroupIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsServiceGroupIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOtoroshiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOtoroshiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScriptsCompileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesServiceIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiServicesServiceIdApikeysClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysClientIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdApikeysClientIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSnowmonkeyStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSnowmonkeyStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSnowmonkeyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSnowmonkeyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiSnowmonkeyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSnowmonkeyOutagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSnowmonkeyOutagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVerifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVerifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVerifiersVerifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
