import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsNameRoute,
  deleteCredentialsNameRoute,
  deleteExternalLocationsNameRoute,
  deleteFunctionsNameRoute,
  deleteModelsFullNameRoute,
  deleteModelsFullNameVersionsVersionRoute,
  deleteSchemasFullNameRoute,
  deleteTablesFullNameRoute,
  deleteVolumesNameRoute,
  getCatalogsNameRoute,
  getCatalogsRoute,
  getCredentialsNameRoute,
  getCredentialsRoute,
  getDeltaPreviewCommitsRoute,
  getExternalLocationsNameRoute,
  getExternalLocationsRoute,
  getFunctionsNameRoute,
  getFunctionsRoute,
  getMetastoreSummaryRoute,
  getModelsFullNameRoute,
  getModelsFullNameVersionsRoute,
  getModelsFullNameVersionsVersionRoute,
  getModelsRoute,
  getPermissionsSecurableTypeFullNameRoute,
  getSchemasFullNameRoute,
  getSchemasRoute,
  getTablesFullNameRoute,
  getTablesRoute,
  getVolumesNameRoute,
  getVolumesRoute,
  patchCatalogsNameRoute,
  patchCredentialsNameRoute,
  patchExternalLocationsNameRoute,
  patchFunctionsNameRoute,
  patchModelsFullNameRoute,
  patchModelsFullNameVersionsVersionFinalizeRoute,
  patchModelsFullNameVersionsVersionRoute,
  patchPermissionsSecurableTypeFullNameRoute,
  patchSchemasFullNameRoute,
  patchTablesFullNameRoute,
  patchVolumesNameRoute,
  postCatalogsRoute,
  postCredentialsRoute,
  postDeltaPreviewCommitsRoute,
  postExternalLocationsRoute,
  postFunctionsRoute,
  postModelsRoute,
  postModelsVersionsRoute,
  postSchemasRoute,
  postStagingTablesRoute,
  postTablesRoute,
  postTemporaryModelVersionCredentialsRoute,
  postTemporaryPathCredentialsRoute,
  postTemporaryTableCredentialsRoute,
  postTemporaryVolumeCredentialsRoute,
  postVolumesRoute,
} from './routes'
import {
  deleteCatalogsNameRouteHandler,
  deleteCredentialsNameRouteHandler,
  deleteExternalLocationsNameRouteHandler,
  deleteFunctionsNameRouteHandler,
  deleteModelsFullNameRouteHandler,
  deleteModelsFullNameVersionsVersionRouteHandler,
  deleteSchemasFullNameRouteHandler,
  deleteTablesFullNameRouteHandler,
  deleteVolumesNameRouteHandler,
  getCatalogsNameRouteHandler,
  getCatalogsRouteHandler,
  getCredentialsNameRouteHandler,
  getCredentialsRouteHandler,
  getDeltaPreviewCommitsRouteHandler,
  getExternalLocationsNameRouteHandler,
  getExternalLocationsRouteHandler,
  getFunctionsNameRouteHandler,
  getFunctionsRouteHandler,
  getMetastoreSummaryRouteHandler,
  getModelsFullNameRouteHandler,
  getModelsFullNameVersionsRouteHandler,
  getModelsFullNameVersionsVersionRouteHandler,
  getModelsRouteHandler,
  getPermissionsSecurableTypeFullNameRouteHandler,
  getSchemasFullNameRouteHandler,
  getSchemasRouteHandler,
  getTablesFullNameRouteHandler,
  getTablesRouteHandler,
  getVolumesNameRouteHandler,
  getVolumesRouteHandler,
  patchCatalogsNameRouteHandler,
  patchCredentialsNameRouteHandler,
  patchExternalLocationsNameRouteHandler,
  patchFunctionsNameRouteHandler,
  patchModelsFullNameRouteHandler,
  patchModelsFullNameVersionsVersionFinalizeRouteHandler,
  patchModelsFullNameVersionsVersionRouteHandler,
  patchPermissionsSecurableTypeFullNameRouteHandler,
  patchSchemasFullNameRouteHandler,
  patchTablesFullNameRouteHandler,
  patchVolumesNameRouteHandler,
  postCatalogsRouteHandler,
  postCredentialsRouteHandler,
  postDeltaPreviewCommitsRouteHandler,
  postExternalLocationsRouteHandler,
  postFunctionsRouteHandler,
  postModelsRouteHandler,
  postModelsVersionsRouteHandler,
  postSchemasRouteHandler,
  postStagingTablesRouteHandler,
  postTablesRouteHandler,
  postTemporaryModelVersionCredentialsRouteHandler,
  postTemporaryPathCredentialsRouteHandler,
  postTemporaryTableCredentialsRouteHandler,
  postTemporaryVolumeCredentialsRouteHandler,
  postVolumesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCatalogsRoute, postCatalogsRouteHandler)
  .openapi(getCatalogsRoute, getCatalogsRouteHandler)
  .openapi(getCatalogsNameRoute, getCatalogsNameRouteHandler)
  .openapi(patchCatalogsNameRoute, patchCatalogsNameRouteHandler)
  .openapi(deleteCatalogsNameRoute, deleteCatalogsNameRouteHandler)
  .openapi(postSchemasRoute, postSchemasRouteHandler)
  .openapi(getSchemasRoute, getSchemasRouteHandler)
  .openapi(getSchemasFullNameRoute, getSchemasFullNameRouteHandler)
  .openapi(patchSchemasFullNameRoute, patchSchemasFullNameRouteHandler)
  .openapi(deleteSchemasFullNameRoute, deleteSchemasFullNameRouteHandler)
  .openapi(postStagingTablesRoute, postStagingTablesRouteHandler)
  .openapi(postTablesRoute, postTablesRouteHandler)
  .openapi(getTablesRoute, getTablesRouteHandler)
  .openapi(getTablesFullNameRoute, getTablesFullNameRouteHandler)
  .openapi(patchTablesFullNameRoute, patchTablesFullNameRouteHandler)
  .openapi(deleteTablesFullNameRoute, deleteTablesFullNameRouteHandler)
  .openapi(postVolumesRoute, postVolumesRouteHandler)
  .openapi(getVolumesRoute, getVolumesRouteHandler)
  .openapi(getVolumesNameRoute, getVolumesNameRouteHandler)
  .openapi(patchVolumesNameRoute, patchVolumesNameRouteHandler)
  .openapi(deleteVolumesNameRoute, deleteVolumesNameRouteHandler)
  .openapi(
    postTemporaryModelVersionCredentialsRoute,
    postTemporaryModelVersionCredentialsRouteHandler,
  )
  .openapi(postTemporaryTableCredentialsRoute, postTemporaryTableCredentialsRouteHandler)
  .openapi(postTemporaryVolumeCredentialsRoute, postTemporaryVolumeCredentialsRouteHandler)
  .openapi(postFunctionsRoute, postFunctionsRouteHandler)
  .openapi(getFunctionsRoute, getFunctionsRouteHandler)
  .openapi(getFunctionsNameRoute, getFunctionsNameRouteHandler)
  .openapi(patchFunctionsNameRoute, patchFunctionsNameRouteHandler)
  .openapi(deleteFunctionsNameRoute, deleteFunctionsNameRouteHandler)
  .openapi(postModelsRoute, postModelsRouteHandler)
  .openapi(getModelsRoute, getModelsRouteHandler)
  .openapi(getModelsFullNameRoute, getModelsFullNameRouteHandler)
  .openapi(patchModelsFullNameRoute, patchModelsFullNameRouteHandler)
  .openapi(deleteModelsFullNameRoute, deleteModelsFullNameRouteHandler)
  .openapi(postModelsVersionsRoute, postModelsVersionsRouteHandler)
  .openapi(getModelsFullNameVersionsRoute, getModelsFullNameVersionsRouteHandler)
  .openapi(getModelsFullNameVersionsVersionRoute, getModelsFullNameVersionsVersionRouteHandler)
  .openapi(patchModelsFullNameVersionsVersionRoute, patchModelsFullNameVersionsVersionRouteHandler)
  .openapi(
    deleteModelsFullNameVersionsVersionRoute,
    deleteModelsFullNameVersionsVersionRouteHandler,
  )
  .openapi(
    patchModelsFullNameVersionsVersionFinalizeRoute,
    patchModelsFullNameVersionsVersionFinalizeRouteHandler,
  )
  .openapi(postTemporaryPathCredentialsRoute, postTemporaryPathCredentialsRouteHandler)
  .openapi(
    getPermissionsSecurableTypeFullNameRoute,
    getPermissionsSecurableTypeFullNameRouteHandler,
  )
  .openapi(
    patchPermissionsSecurableTypeFullNameRoute,
    patchPermissionsSecurableTypeFullNameRouteHandler,
  )
  .openapi(getMetastoreSummaryRoute, getMetastoreSummaryRouteHandler)
  .openapi(postCredentialsRoute, postCredentialsRouteHandler)
  .openapi(getCredentialsRoute, getCredentialsRouteHandler)
  .openapi(getCredentialsNameRoute, getCredentialsNameRouteHandler)
  .openapi(patchCredentialsNameRoute, patchCredentialsNameRouteHandler)
  .openapi(deleteCredentialsNameRoute, deleteCredentialsNameRouteHandler)
  .openapi(postExternalLocationsRoute, postExternalLocationsRouteHandler)
  .openapi(getExternalLocationsRoute, getExternalLocationsRouteHandler)
  .openapi(getExternalLocationsNameRoute, getExternalLocationsNameRouteHandler)
  .openapi(deleteExternalLocationsNameRoute, deleteExternalLocationsNameRouteHandler)
  .openapi(patchExternalLocationsNameRoute, patchExternalLocationsNameRouteHandler)
  .openapi(getDeltaPreviewCommitsRoute, getDeltaPreviewCommitsRouteHandler)
  .openapi(postDeltaPreviewCommitsRoute, postDeltaPreviewCommitsRouteHandler)

export default app
