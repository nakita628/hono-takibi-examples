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
  getHealthRoute,
  getLinesLineServicesRoute,
  getLinesRoute,
  getNewApikeyRoute,
  getNewGroupRoute,
  getNewServiceRoute,
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
} from './routes'
import {
  deleteApiAuthsIdRouteHandler,
  deleteApiCertificatesIdRouteHandler,
  deleteApiClientValidatorsIdRouteHandler,
  deleteApiDataExporterConfigsBulkRouteHandler,
  deleteApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  deleteApiGroupsGroupIdApikeysClientIdQuotasRouteHandler,
  deleteApiGroupsGroupIdApikeysClientIdRouteHandler,
  deleteApiGroupsServiceGroupIdRouteHandler,
  deleteApiScriptsScriptIdRouteHandler,
  deleteApiServicesServiceIdApikeysClientIdQuotasRouteHandler,
  deleteApiServicesServiceIdApikeysClientIdRouteHandler,
  deleteApiServicesServiceIdRouteHandler,
  deleteApiServicesServiceIdTargetsRouteHandler,
  deleteApiServicesServiceIdTemplateRouteHandler,
  deleteApiSnowmonkeyOutagesRouteHandler,
  deleteApiVerifiersVerifierIdRouteHandler,
  getApiApikeysRouteHandler,
  getApiAuthsIdRouteHandler,
  getApiAuthsRouteHandler,
  getApiCertificatesIdRouteHandler,
  getApiCertificatesRouteHandler,
  getApiClientValidatorsIdRouteHandler,
  getApiClientValidatorsRouteHandler,
  getApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  getApiDataExporterConfigsRouteHandler,
  getApiDataExporterConfigsTemplateRouteHandler,
  getApiGlobalconfigRouteHandler,
  getApiGroupsGroupIdApikeysClientIdQuotasRouteHandler,
  getApiGroupsGroupIdApikeysClientIdRouteHandler,
  getApiGroupsGroupIdApikeysRouteHandler,
  getApiGroupsRouteHandler,
  getApiGroupsServiceGroupIdRouteHandler,
  getApiGroupsServiceGroupIdServicesRouteHandler,
  getApiLiveIdRouteHandler,
  getApiLiveRouteHandler,
  getApiOtoroshiJsonRouteHandler,
  getApiScriptsRouteHandler,
  getApiScriptsScriptIdRouteHandler,
  getApiServicesRouteHandler,
  getApiServicesServiceIdApikeysClientIdGroupRouteHandler,
  getApiServicesServiceIdApikeysClientIdQuotasRouteHandler,
  getApiServicesServiceIdApikeysClientIdRouteHandler,
  getApiServicesServiceIdApikeysRouteHandler,
  getApiServicesServiceIdRouteHandler,
  getApiServicesServiceIdTargetsRouteHandler,
  getApiServicesServiceIdTemplateRouteHandler,
  getApiSnowmonkeyConfigRouteHandler,
  getApiSnowmonkeyOutagesRouteHandler,
  getApiVerifiersRouteHandler,
  getApiVerifiersVerifierIdRouteHandler,
  getHealthRouteHandler,
  getLinesLineServicesRouteHandler,
  getLinesRouteHandler,
  getNewApikeyRouteHandler,
  getNewGroupRouteHandler,
  getNewServiceRouteHandler,
  patchApiAuthsIdRouteHandler,
  patchApiCertificatesIdRouteHandler,
  patchApiClientValidatorsIdRouteHandler,
  patchApiDataExporterConfigsBulkRouteHandler,
  patchApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  patchApiGlobalconfigRouteHandler,
  patchApiGroupsGroupIdApikeysClientIdRouteHandler,
  patchApiGroupsServiceGroupIdRouteHandler,
  patchApiScriptsScriptIdRouteHandler,
  patchApiServicesServiceIdApikeysClientIdRouteHandler,
  patchApiServicesServiceIdRouteHandler,
  patchApiServicesServiceIdTargetsRouteHandler,
  patchApiSnowmonkeyConfigRouteHandler,
  patchApiVerifiersVerifierIdRouteHandler,
  postApiAuthsRouteHandler,
  postApiCertificatesRouteHandler,
  postApiClientValidatorsRouteHandler,
  postApiDataExporterConfigsBulkRouteHandler,
  postApiDataExporterConfigsRouteHandler,
  postApiGroupsGroupIdApikeysRouteHandler,
  postApiGroupsRouteHandler,
  postApiImportRouteHandler,
  postApiOtoroshiJsonRouteHandler,
  postApiScriptsCompileRouteHandler,
  postApiScriptsRouteHandler,
  postApiServicesRouteHandler,
  postApiServicesServiceIdApikeysRouteHandler,
  postApiServicesServiceIdTargetsRouteHandler,
  postApiServicesServiceIdTemplateRouteHandler,
  postApiSnowmonkeyStartRouteHandler,
  postApiSnowmonkeyStopRouteHandler,
  postApiVerifiersRouteHandler,
  putApiAuthsIdRouteHandler,
  putApiCertificatesIdRouteHandler,
  putApiClientValidatorsIdRouteHandler,
  putApiDataExporterConfigsBulkRouteHandler,
  putApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  putApiGlobalconfigRouteHandler,
  putApiGroupsGroupIdApikeysClientIdRouteHandler,
  putApiGroupsServiceGroupIdRouteHandler,
  putApiScriptsScriptIdRouteHandler,
  putApiServicesServiceIdApikeysClientIdRouteHandler,
  putApiServicesServiceIdRouteHandler,
  putApiServicesServiceIdTemplateRouteHandler,
  putApiSnowmonkeyConfigRouteHandler,
  putApiVerifiersVerifierIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiApikeysRoute, getApiApikeysRouteHandler)
  .openapi(getApiAuthsRoute, getApiAuthsRouteHandler)
  .openapi(postApiAuthsRoute, postApiAuthsRouteHandler)
  .openapi(deleteApiAuthsIdRoute, deleteApiAuthsIdRouteHandler)
  .openapi(getApiAuthsIdRoute, getApiAuthsIdRouteHandler)
  .openapi(patchApiAuthsIdRoute, patchApiAuthsIdRouteHandler)
  .openapi(putApiAuthsIdRoute, putApiAuthsIdRouteHandler)
  .openapi(getApiCertificatesRoute, getApiCertificatesRouteHandler)
  .openapi(postApiCertificatesRoute, postApiCertificatesRouteHandler)
  .openapi(deleteApiCertificatesIdRoute, deleteApiCertificatesIdRouteHandler)
  .openapi(getApiCertificatesIdRoute, getApiCertificatesIdRouteHandler)
  .openapi(patchApiCertificatesIdRoute, patchApiCertificatesIdRouteHandler)
  .openapi(putApiCertificatesIdRoute, putApiCertificatesIdRouteHandler)
  .openapi(getApiClientValidatorsRoute, getApiClientValidatorsRouteHandler)
  .openapi(postApiClientValidatorsRoute, postApiClientValidatorsRouteHandler)
  .openapi(deleteApiClientValidatorsIdRoute, deleteApiClientValidatorsIdRouteHandler)
  .openapi(getApiClientValidatorsIdRoute, getApiClientValidatorsIdRouteHandler)
  .openapi(patchApiClientValidatorsIdRoute, patchApiClientValidatorsIdRouteHandler)
  .openapi(putApiClientValidatorsIdRoute, putApiClientValidatorsIdRouteHandler)
  .openapi(getApiDataExporterConfigsRoute, getApiDataExporterConfigsRouteHandler)
  .openapi(postApiDataExporterConfigsRoute, postApiDataExporterConfigsRouteHandler)
  .openapi(deleteApiDataExporterConfigsBulkRoute, deleteApiDataExporterConfigsBulkRouteHandler)
  .openapi(patchApiDataExporterConfigsBulkRoute, patchApiDataExporterConfigsBulkRouteHandler)
  .openapi(postApiDataExporterConfigsBulkRoute, postApiDataExporterConfigsBulkRouteHandler)
  .openapi(putApiDataExporterConfigsBulkRoute, putApiDataExporterConfigsBulkRouteHandler)
  .openapi(getApiDataExporterConfigsTemplateRoute, getApiDataExporterConfigsTemplateRouteHandler)
  .openapi(
    deleteApiDataExporterConfigsDataExporterConfigIdRoute,
    deleteApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  )
  .openapi(
    getApiDataExporterConfigsDataExporterConfigIdRoute,
    getApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  )
  .openapi(
    patchApiDataExporterConfigsDataExporterConfigIdRoute,
    patchApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  )
  .openapi(
    putApiDataExporterConfigsDataExporterConfigIdRoute,
    putApiDataExporterConfigsDataExporterConfigIdRouteHandler,
  )
  .openapi(getApiGlobalconfigRoute, getApiGlobalconfigRouteHandler)
  .openapi(patchApiGlobalconfigRoute, patchApiGlobalconfigRouteHandler)
  .openapi(putApiGlobalconfigRoute, putApiGlobalconfigRouteHandler)
  .openapi(getApiGroupsRoute, getApiGroupsRouteHandler)
  .openapi(postApiGroupsRoute, postApiGroupsRouteHandler)
  .openapi(getApiGroupsGroupIdApikeysRoute, getApiGroupsGroupIdApikeysRouteHandler)
  .openapi(postApiGroupsGroupIdApikeysRoute, postApiGroupsGroupIdApikeysRouteHandler)
  .openapi(
    deleteApiGroupsGroupIdApikeysClientIdRoute,
    deleteApiGroupsGroupIdApikeysClientIdRouteHandler,
  )
  .openapi(getApiGroupsGroupIdApikeysClientIdRoute, getApiGroupsGroupIdApikeysClientIdRouteHandler)
  .openapi(
    patchApiGroupsGroupIdApikeysClientIdRoute,
    patchApiGroupsGroupIdApikeysClientIdRouteHandler,
  )
  .openapi(putApiGroupsGroupIdApikeysClientIdRoute, putApiGroupsGroupIdApikeysClientIdRouteHandler)
  .openapi(
    deleteApiGroupsGroupIdApikeysClientIdQuotasRoute,
    deleteApiGroupsGroupIdApikeysClientIdQuotasRouteHandler,
  )
  .openapi(
    getApiGroupsGroupIdApikeysClientIdQuotasRoute,
    getApiGroupsGroupIdApikeysClientIdQuotasRouteHandler,
  )
  .openapi(deleteApiGroupsServiceGroupIdRoute, deleteApiGroupsServiceGroupIdRouteHandler)
  .openapi(getApiGroupsServiceGroupIdRoute, getApiGroupsServiceGroupIdRouteHandler)
  .openapi(patchApiGroupsServiceGroupIdRoute, patchApiGroupsServiceGroupIdRouteHandler)
  .openapi(putApiGroupsServiceGroupIdRoute, putApiGroupsServiceGroupIdRouteHandler)
  .openapi(getApiGroupsServiceGroupIdServicesRoute, getApiGroupsServiceGroupIdServicesRouteHandler)
  .openapi(postApiImportRoute, postApiImportRouteHandler)
  .openapi(getApiLiveRoute, getApiLiveRouteHandler)
  .openapi(getApiLiveIdRoute, getApiLiveIdRouteHandler)
  .openapi(getApiOtoroshiJsonRoute, getApiOtoroshiJsonRouteHandler)
  .openapi(postApiOtoroshiJsonRoute, postApiOtoroshiJsonRouteHandler)
  .openapi(getApiScriptsRoute, getApiScriptsRouteHandler)
  .openapi(postApiScriptsRoute, postApiScriptsRouteHandler)
  .openapi(postApiScriptsCompileRoute, postApiScriptsCompileRouteHandler)
  .openapi(deleteApiScriptsScriptIdRoute, deleteApiScriptsScriptIdRouteHandler)
  .openapi(getApiScriptsScriptIdRoute, getApiScriptsScriptIdRouteHandler)
  .openapi(patchApiScriptsScriptIdRoute, patchApiScriptsScriptIdRouteHandler)
  .openapi(putApiScriptsScriptIdRoute, putApiScriptsScriptIdRouteHandler)
  .openapi(getApiServicesRoute, getApiServicesRouteHandler)
  .openapi(postApiServicesRoute, postApiServicesRouteHandler)
  .openapi(deleteApiServicesServiceIdRoute, deleteApiServicesServiceIdRouteHandler)
  .openapi(getApiServicesServiceIdRoute, getApiServicesServiceIdRouteHandler)
  .openapi(patchApiServicesServiceIdRoute, patchApiServicesServiceIdRouteHandler)
  .openapi(putApiServicesServiceIdRoute, putApiServicesServiceIdRouteHandler)
  .openapi(getApiServicesServiceIdApikeysRoute, getApiServicesServiceIdApikeysRouteHandler)
  .openapi(postApiServicesServiceIdApikeysRoute, postApiServicesServiceIdApikeysRouteHandler)
  .openapi(
    deleteApiServicesServiceIdApikeysClientIdRoute,
    deleteApiServicesServiceIdApikeysClientIdRouteHandler,
  )
  .openapi(
    getApiServicesServiceIdApikeysClientIdRoute,
    getApiServicesServiceIdApikeysClientIdRouteHandler,
  )
  .openapi(
    patchApiServicesServiceIdApikeysClientIdRoute,
    patchApiServicesServiceIdApikeysClientIdRouteHandler,
  )
  .openapi(
    putApiServicesServiceIdApikeysClientIdRoute,
    putApiServicesServiceIdApikeysClientIdRouteHandler,
  )
  .openapi(
    getApiServicesServiceIdApikeysClientIdGroupRoute,
    getApiServicesServiceIdApikeysClientIdGroupRouteHandler,
  )
  .openapi(
    deleteApiServicesServiceIdApikeysClientIdQuotasRoute,
    deleteApiServicesServiceIdApikeysClientIdQuotasRouteHandler,
  )
  .openapi(
    getApiServicesServiceIdApikeysClientIdQuotasRoute,
    getApiServicesServiceIdApikeysClientIdQuotasRouteHandler,
  )
  .openapi(deleteApiServicesServiceIdTargetsRoute, deleteApiServicesServiceIdTargetsRouteHandler)
  .openapi(getApiServicesServiceIdTargetsRoute, getApiServicesServiceIdTargetsRouteHandler)
  .openapi(patchApiServicesServiceIdTargetsRoute, patchApiServicesServiceIdTargetsRouteHandler)
  .openapi(postApiServicesServiceIdTargetsRoute, postApiServicesServiceIdTargetsRouteHandler)
  .openapi(deleteApiServicesServiceIdTemplateRoute, deleteApiServicesServiceIdTemplateRouteHandler)
  .openapi(getApiServicesServiceIdTemplateRoute, getApiServicesServiceIdTemplateRouteHandler)
  .openapi(postApiServicesServiceIdTemplateRoute, postApiServicesServiceIdTemplateRouteHandler)
  .openapi(putApiServicesServiceIdTemplateRoute, putApiServicesServiceIdTemplateRouteHandler)
  .openapi(postApiSnowmonkeyStartRoute, postApiSnowmonkeyStartRouteHandler)
  .openapi(postApiSnowmonkeyStopRoute, postApiSnowmonkeyStopRouteHandler)
  .openapi(getApiSnowmonkeyConfigRoute, getApiSnowmonkeyConfigRouteHandler)
  .openapi(patchApiSnowmonkeyConfigRoute, patchApiSnowmonkeyConfigRouteHandler)
  .openapi(putApiSnowmonkeyConfigRoute, putApiSnowmonkeyConfigRouteHandler)
  .openapi(deleteApiSnowmonkeyOutagesRoute, deleteApiSnowmonkeyOutagesRouteHandler)
  .openapi(getApiSnowmonkeyOutagesRoute, getApiSnowmonkeyOutagesRouteHandler)
  .openapi(getApiVerifiersRoute, getApiVerifiersRouteHandler)
  .openapi(postApiVerifiersRoute, postApiVerifiersRouteHandler)
  .openapi(deleteApiVerifiersVerifierIdRoute, deleteApiVerifiersVerifierIdRouteHandler)
  .openapi(getApiVerifiersVerifierIdRoute, getApiVerifiersVerifierIdRouteHandler)
  .openapi(patchApiVerifiersVerifierIdRoute, patchApiVerifiersVerifierIdRouteHandler)
  .openapi(putApiVerifiersVerifierIdRoute, putApiVerifiersVerifierIdRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getLinesRoute, getLinesRouteHandler)
  .openapi(getLinesLineServicesRoute, getLinesLineServicesRouteHandler)
  .openapi(getNewApikeyRoute, getNewApikeyRouteHandler)
  .openapi(getNewGroupRoute, getNewGroupRouteHandler)
  .openapi(getNewServiceRoute, getNewServiceRouteHandler)

export default app
