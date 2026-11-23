import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentColumnSpecsRoute,
  getV1beta1ParentDatasetsRoute,
  getV1beta1ParentModelEvaluationsRoute,
  getV1beta1ParentModelsRoute,
  getV1beta1ParentTableSpecsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameBatchPredictRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameDeployRoute,
  postV1beta1NameExportDataRoute,
  postV1beta1NameExportEvaluatedExamplesRoute,
  postV1beta1NameExportRoute,
  postV1beta1NameImportDataRoute,
  postV1beta1NamePredictRoute,
  postV1beta1NameUndeployRoute,
  postV1beta1NameWaitRoute,
  postV1beta1ParentDatasetsRoute,
  postV1beta1ParentModelsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentColumnSpecsRouteHandler,
  getV1beta1ParentDatasetsRouteHandler,
  getV1beta1ParentModelEvaluationsRouteHandler,
  getV1beta1ParentModelsRouteHandler,
  getV1beta1ParentTableSpecsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameBatchPredictRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NameDeployRouteHandler,
  postV1beta1NameExportDataRouteHandler,
  postV1beta1NameExportEvaluatedExamplesRouteHandler,
  postV1beta1NameExportRouteHandler,
  postV1beta1NameImportDataRouteHandler,
  postV1beta1NamePredictRouteHandler,
  postV1beta1NameUndeployRouteHandler,
  postV1beta1NameWaitRouteHandler,
  postV1beta1ParentDatasetsRouteHandler,
  postV1beta1ParentModelsRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameBatchPredictRoute, postV1beta1NameBatchPredictRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameDeployRoute, postV1beta1NameDeployRouteHandler)
  .openapi(postV1beta1NameExportRoute, postV1beta1NameExportRouteHandler)
  .openapi(postV1beta1NameExportDataRoute, postV1beta1NameExportDataRouteHandler)
  .openapi(
    postV1beta1NameExportEvaluatedExamplesRoute,
    postV1beta1NameExportEvaluatedExamplesRouteHandler,
  )
  .openapi(postV1beta1NameImportDataRoute, postV1beta1NameImportDataRouteHandler)
  .openapi(postV1beta1NamePredictRoute, postV1beta1NamePredictRouteHandler)
  .openapi(postV1beta1NameUndeployRoute, postV1beta1NameUndeployRouteHandler)
  .openapi(postV1beta1NameWaitRoute, postV1beta1NameWaitRouteHandler)
  .openapi(getV1beta1ParentColumnSpecsRoute, getV1beta1ParentColumnSpecsRouteHandler)
  .openapi(getV1beta1ParentDatasetsRoute, getV1beta1ParentDatasetsRouteHandler)
  .openapi(postV1beta1ParentDatasetsRoute, postV1beta1ParentDatasetsRouteHandler)
  .openapi(getV1beta1ParentModelEvaluationsRoute, getV1beta1ParentModelEvaluationsRouteHandler)
  .openapi(getV1beta1ParentModelsRoute, getV1beta1ParentModelsRouteHandler)
  .openapi(postV1beta1ParentModelsRoute, postV1beta1ParentModelsRouteHandler)
  .openapi(getV1beta1ParentTableSpecsRoute, getV1beta1ParentTableSpecsRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
