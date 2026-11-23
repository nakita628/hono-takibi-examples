import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameLocationsRoute,
  getV1alpha1NameOperationsRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentAssetsRoute,
  getV1alpha1ParentGroupsRoute,
  getV1alpha1ParentImportDataFilesRoute,
  getV1alpha1ParentImportJobsRoute,
  getV1alpha1ParentPreferenceSetsRoute,
  getV1alpha1ParentReportConfigsRoute,
  getV1alpha1ParentReportsRoute,
  getV1alpha1ParentSourcesRoute,
  patchV1alpha1NameRoute,
  postV1alpha1GroupAddAssetsRoute,
  postV1alpha1GroupRemoveAssetsRoute,
  postV1alpha1NameCancelRoute,
  postV1alpha1NameRunRoute,
  postV1alpha1NameValidateRoute,
  postV1alpha1ParentAssetsAggregateValuesRoute,
  postV1alpha1ParentAssetsBatchDeleteRoute,
  postV1alpha1ParentAssetsBatchUpdateRoute,
  postV1alpha1ParentAssetsReportAssetFramesRoute,
  postV1alpha1ParentGroupsRoute,
  postV1alpha1ParentImportDataFilesRoute,
  postV1alpha1ParentImportJobsRoute,
  postV1alpha1ParentPreferenceSetsRoute,
  postV1alpha1ParentReportConfigsRoute,
  postV1alpha1ParentReportsRoute,
  postV1alpha1ParentSourcesRoute,
} from './routes'
import {
  deleteV1alpha1NameRouteHandler,
  getV1alpha1NameLocationsRouteHandler,
  getV1alpha1NameOperationsRouteHandler,
  getV1alpha1NameRouteHandler,
  getV1alpha1ParentAssetsRouteHandler,
  getV1alpha1ParentGroupsRouteHandler,
  getV1alpha1ParentImportDataFilesRouteHandler,
  getV1alpha1ParentImportJobsRouteHandler,
  getV1alpha1ParentPreferenceSetsRouteHandler,
  getV1alpha1ParentReportConfigsRouteHandler,
  getV1alpha1ParentReportsRouteHandler,
  getV1alpha1ParentSourcesRouteHandler,
  patchV1alpha1NameRouteHandler,
  postV1alpha1GroupAddAssetsRouteHandler,
  postV1alpha1GroupRemoveAssetsRouteHandler,
  postV1alpha1NameCancelRouteHandler,
  postV1alpha1NameRunRouteHandler,
  postV1alpha1NameValidateRouteHandler,
  postV1alpha1ParentAssetsAggregateValuesRouteHandler,
  postV1alpha1ParentAssetsBatchDeleteRouteHandler,
  postV1alpha1ParentAssetsBatchUpdateRouteHandler,
  postV1alpha1ParentAssetsReportAssetFramesRouteHandler,
  postV1alpha1ParentGroupsRouteHandler,
  postV1alpha1ParentImportDataFilesRouteHandler,
  postV1alpha1ParentImportJobsRouteHandler,
  postV1alpha1ParentPreferenceSetsRouteHandler,
  postV1alpha1ParentReportConfigsRouteHandler,
  postV1alpha1ParentReportsRouteHandler,
  postV1alpha1ParentSourcesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1alpha1GroupAddAssetsRoute, postV1alpha1GroupAddAssetsRouteHandler)
  .openapi(postV1alpha1GroupRemoveAssetsRoute, postV1alpha1GroupRemoveAssetsRouteHandler)
  .openapi(deleteV1alpha1NameRoute, deleteV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameRoute, getV1alpha1NameRouteHandler)
  .openapi(patchV1alpha1NameRoute, patchV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameLocationsRoute, getV1alpha1NameLocationsRouteHandler)
  .openapi(getV1alpha1NameOperationsRoute, getV1alpha1NameOperationsRouteHandler)
  .openapi(postV1alpha1NameCancelRoute, postV1alpha1NameCancelRouteHandler)
  .openapi(postV1alpha1NameRunRoute, postV1alpha1NameRunRouteHandler)
  .openapi(postV1alpha1NameValidateRoute, postV1alpha1NameValidateRouteHandler)
  .openapi(getV1alpha1ParentAssetsRoute, getV1alpha1ParentAssetsRouteHandler)
  .openapi(
    postV1alpha1ParentAssetsAggregateValuesRoute,
    postV1alpha1ParentAssetsAggregateValuesRouteHandler,
  )
  .openapi(
    postV1alpha1ParentAssetsBatchDeleteRoute,
    postV1alpha1ParentAssetsBatchDeleteRouteHandler,
  )
  .openapi(
    postV1alpha1ParentAssetsBatchUpdateRoute,
    postV1alpha1ParentAssetsBatchUpdateRouteHandler,
  )
  .openapi(
    postV1alpha1ParentAssetsReportAssetFramesRoute,
    postV1alpha1ParentAssetsReportAssetFramesRouteHandler,
  )
  .openapi(getV1alpha1ParentGroupsRoute, getV1alpha1ParentGroupsRouteHandler)
  .openapi(postV1alpha1ParentGroupsRoute, postV1alpha1ParentGroupsRouteHandler)
  .openapi(getV1alpha1ParentImportDataFilesRoute, getV1alpha1ParentImportDataFilesRouteHandler)
  .openapi(postV1alpha1ParentImportDataFilesRoute, postV1alpha1ParentImportDataFilesRouteHandler)
  .openapi(getV1alpha1ParentImportJobsRoute, getV1alpha1ParentImportJobsRouteHandler)
  .openapi(postV1alpha1ParentImportJobsRoute, postV1alpha1ParentImportJobsRouteHandler)
  .openapi(getV1alpha1ParentPreferenceSetsRoute, getV1alpha1ParentPreferenceSetsRouteHandler)
  .openapi(postV1alpha1ParentPreferenceSetsRoute, postV1alpha1ParentPreferenceSetsRouteHandler)
  .openapi(getV1alpha1ParentReportConfigsRoute, getV1alpha1ParentReportConfigsRouteHandler)
  .openapi(postV1alpha1ParentReportConfigsRoute, postV1alpha1ParentReportConfigsRouteHandler)
  .openapi(getV1alpha1ParentReportsRoute, getV1alpha1ParentReportsRouteHandler)
  .openapi(postV1alpha1ParentReportsRoute, postV1alpha1ParentReportsRouteHandler)
  .openapi(getV1alpha1ParentSourcesRoute, getV1alpha1ParentSourcesRouteHandler)
  .openapi(postV1alpha1ParentSourcesRoute, postV1alpha1ParentSourcesRouteHandler)

export default app
