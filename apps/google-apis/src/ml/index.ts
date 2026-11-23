import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameGetConfigRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentLocationsRoute,
  getV1ParentModelsRoute,
  getV1ParentStudiesRoute,
  getV1ParentTrialsRoute,
  getV1ParentVersionsRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameAddMeasurementRoute,
  postV1NameCancelRoute,
  postV1NameCheckEarlyStoppingStateRoute,
  postV1NameCompleteRoute,
  postV1NameExplainRoute,
  postV1NamePredictRoute,
  postV1NameSetDefaultRoute,
  postV1NameStopRoute,
  postV1ParentJobsRoute,
  postV1ParentModelsRoute,
  postV1ParentStudiesRoute,
  postV1ParentTrialsListOptimalTrialsRoute,
  postV1ParentTrialsRoute,
  postV1ParentTrialsSuggestRoute,
  postV1ParentVersionsRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameGetConfigRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentJobsRouteHandler,
  getV1ParentLocationsRouteHandler,
  getV1ParentModelsRouteHandler,
  getV1ParentStudiesRouteHandler,
  getV1ParentTrialsRouteHandler,
  getV1ParentVersionsRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1NameAddMeasurementRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameCheckEarlyStoppingStateRouteHandler,
  postV1NameCompleteRouteHandler,
  postV1NameExplainRouteHandler,
  postV1NamePredictRouteHandler,
  postV1NameSetDefaultRouteHandler,
  postV1NameStopRouteHandler,
  postV1ParentJobsRouteHandler,
  postV1ParentModelsRouteHandler,
  postV1ParentStudiesRouteHandler,
  postV1ParentTrialsListOptimalTrialsRouteHandler,
  postV1ParentTrialsRouteHandler,
  postV1ParentTrialsSuggestRouteHandler,
  postV1ParentVersionsRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameAddMeasurementRoute, postV1NameAddMeasurementRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameCheckEarlyStoppingStateRoute, postV1NameCheckEarlyStoppingStateRouteHandler)
  .openapi(postV1NameCompleteRoute, postV1NameCompleteRouteHandler)
  .openapi(postV1NameExplainRoute, postV1NameExplainRouteHandler)
  .openapi(getV1NameGetConfigRoute, getV1NameGetConfigRouteHandler)
  .openapi(postV1NamePredictRoute, postV1NamePredictRouteHandler)
  .openapi(postV1NameSetDefaultRoute, postV1NameSetDefaultRouteHandler)
  .openapi(postV1NameStopRoute, postV1NameStopRouteHandler)
  .openapi(getV1ParentJobsRoute, getV1ParentJobsRouteHandler)
  .openapi(postV1ParentJobsRoute, postV1ParentJobsRouteHandler)
  .openapi(getV1ParentLocationsRoute, getV1ParentLocationsRouteHandler)
  .openapi(getV1ParentModelsRoute, getV1ParentModelsRouteHandler)
  .openapi(postV1ParentModelsRoute, postV1ParentModelsRouteHandler)
  .openapi(getV1ParentStudiesRoute, getV1ParentStudiesRouteHandler)
  .openapi(postV1ParentStudiesRoute, postV1ParentStudiesRouteHandler)
  .openapi(getV1ParentTrialsRoute, getV1ParentTrialsRouteHandler)
  .openapi(postV1ParentTrialsRoute, postV1ParentTrialsRouteHandler)
  .openapi(
    postV1ParentTrialsListOptimalTrialsRoute,
    postV1ParentTrialsListOptimalTrialsRouteHandler,
  )
  .openapi(postV1ParentTrialsSuggestRoute, postV1ParentTrialsSuggestRouteHandler)
  .openapi(getV1ParentVersionsRoute, getV1ParentVersionsRouteHandler)
  .openapi(postV1ParentVersionsRoute, postV1ParentVersionsRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
