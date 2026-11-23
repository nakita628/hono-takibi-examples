import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta3NameRoute,
  getV1beta3NameLocationsRoute,
  getV1beta3NameRoute,
  getV1beta3ParentEvaluationsRoute,
  getV1beta3ParentFetchProcessorTypesRoute,
  getV1beta3ParentProcessorsRoute,
  getV1beta3ParentProcessorTypesRoute,
  getV1beta3ParentProcessorVersionsRoute,
  postV1beta3HumanReviewConfigReviewDocumentRoute,
  postV1beta3NameBatchProcessRoute,
  postV1beta3NameCancelRoute,
  postV1beta3NameDeployRoute,
  postV1beta3NameDisableRoute,
  postV1beta3NameEnableRoute,
  postV1beta3NameProcessRoute,
  postV1beta3NameUndeployRoute,
  postV1beta3ParentProcessorsRoute,
  postV1beta3ParentProcessorVersionsImportProcessorVersionRoute,
  postV1beta3ParentProcessorVersionsTrainRoute,
  postV1beta3ProcessorSetDefaultProcessorVersionRoute,
  postV1beta3ProcessorVersionEvaluateProcessorVersionRoute,
} from './routes'
import {
  deleteV1beta3NameRouteHandler,
  getV1beta3NameLocationsRouteHandler,
  getV1beta3NameRouteHandler,
  getV1beta3ParentEvaluationsRouteHandler,
  getV1beta3ParentFetchProcessorTypesRouteHandler,
  getV1beta3ParentProcessorsRouteHandler,
  getV1beta3ParentProcessorTypesRouteHandler,
  getV1beta3ParentProcessorVersionsRouteHandler,
  postV1beta3HumanReviewConfigReviewDocumentRouteHandler,
  postV1beta3NameBatchProcessRouteHandler,
  postV1beta3NameCancelRouteHandler,
  postV1beta3NameDeployRouteHandler,
  postV1beta3NameDisableRouteHandler,
  postV1beta3NameEnableRouteHandler,
  postV1beta3NameProcessRouteHandler,
  postV1beta3NameUndeployRouteHandler,
  postV1beta3ParentProcessorsRouteHandler,
  postV1beta3ParentProcessorVersionsImportProcessorVersionRouteHandler,
  postV1beta3ParentProcessorVersionsTrainRouteHandler,
  postV1beta3ProcessorSetDefaultProcessorVersionRouteHandler,
  postV1beta3ProcessorVersionEvaluateProcessorVersionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1beta3HumanReviewConfigReviewDocumentRoute,
    postV1beta3HumanReviewConfigReviewDocumentRouteHandler,
  )
  .openapi(deleteV1beta3NameRoute, deleteV1beta3NameRouteHandler)
  .openapi(getV1beta3NameRoute, getV1beta3NameRouteHandler)
  .openapi(getV1beta3NameLocationsRoute, getV1beta3NameLocationsRouteHandler)
  .openapi(postV1beta3NameBatchProcessRoute, postV1beta3NameBatchProcessRouteHandler)
  .openapi(postV1beta3NameCancelRoute, postV1beta3NameCancelRouteHandler)
  .openapi(postV1beta3NameDeployRoute, postV1beta3NameDeployRouteHandler)
  .openapi(postV1beta3NameDisableRoute, postV1beta3NameDisableRouteHandler)
  .openapi(postV1beta3NameEnableRoute, postV1beta3NameEnableRouteHandler)
  .openapi(postV1beta3NameProcessRoute, postV1beta3NameProcessRouteHandler)
  .openapi(postV1beta3NameUndeployRoute, postV1beta3NameUndeployRouteHandler)
  .openapi(getV1beta3ParentEvaluationsRoute, getV1beta3ParentEvaluationsRouteHandler)
  .openapi(getV1beta3ParentProcessorTypesRoute, getV1beta3ParentProcessorTypesRouteHandler)
  .openapi(getV1beta3ParentProcessorVersionsRoute, getV1beta3ParentProcessorVersionsRouteHandler)
  .openapi(
    postV1beta3ParentProcessorVersionsImportProcessorVersionRoute,
    postV1beta3ParentProcessorVersionsImportProcessorVersionRouteHandler,
  )
  .openapi(
    postV1beta3ParentProcessorVersionsTrainRoute,
    postV1beta3ParentProcessorVersionsTrainRouteHandler,
  )
  .openapi(getV1beta3ParentProcessorsRoute, getV1beta3ParentProcessorsRouteHandler)
  .openapi(postV1beta3ParentProcessorsRoute, postV1beta3ParentProcessorsRouteHandler)
  .openapi(
    getV1beta3ParentFetchProcessorTypesRoute,
    getV1beta3ParentFetchProcessorTypesRouteHandler,
  )
  .openapi(
    postV1beta3ProcessorVersionEvaluateProcessorVersionRoute,
    postV1beta3ProcessorVersionEvaluateProcessorVersionRouteHandler,
  )
  .openapi(
    postV1beta3ProcessorSetDefaultProcessorVersionRoute,
    postV1beta3ProcessorSetDefaultProcessorVersionRouteHandler,
  )

export default app
