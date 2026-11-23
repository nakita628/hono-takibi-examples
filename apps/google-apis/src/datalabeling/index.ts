import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameCancelRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentAnnotatedDatasetsRoute,
  getV1beta1ParentAnnotationSpecSetsRoute,
  getV1beta1ParentDataItemsRoute,
  getV1beta1ParentDatasetsRoute,
  getV1beta1ParentEvaluationJobsRoute,
  getV1beta1ParentEvaluationsSearchRoute,
  getV1beta1ParentExamplesRoute,
  getV1beta1ParentFeedbackMessagesRoute,
  getV1beta1ParentFeedbackThreadsRoute,
  getV1beta1ParentInstructionsRoute,
  patchV1beta1NameRoute,
  postV1beta1NameExportDataRoute,
  postV1beta1NameImportDataRoute,
  postV1beta1NamePauseRoute,
  postV1beta1NameResumeRoute,
  postV1beta1ParentAnnotationSpecSetsRoute,
  postV1beta1ParentDatasetsRoute,
  postV1beta1ParentEvaluationJobsRoute,
  postV1beta1ParentExampleComparisonsSearchRoute,
  postV1beta1ParentFeedbackMessagesRoute,
  postV1beta1ParentImageLabelRoute,
  postV1beta1ParentInstructionsRoute,
  postV1beta1ParentTextLabelRoute,
  postV1beta1ParentVideoLabelRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameCancelRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentAnnotatedDatasetsRouteHandler,
  getV1beta1ParentAnnotationSpecSetsRouteHandler,
  getV1beta1ParentDataItemsRouteHandler,
  getV1beta1ParentDatasetsRouteHandler,
  getV1beta1ParentEvaluationJobsRouteHandler,
  getV1beta1ParentEvaluationsSearchRouteHandler,
  getV1beta1ParentExamplesRouteHandler,
  getV1beta1ParentFeedbackMessagesRouteHandler,
  getV1beta1ParentFeedbackThreadsRouteHandler,
  getV1beta1ParentInstructionsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameExportDataRouteHandler,
  postV1beta1NameImportDataRouteHandler,
  postV1beta1NamePauseRouteHandler,
  postV1beta1NameResumeRouteHandler,
  postV1beta1ParentAnnotationSpecSetsRouteHandler,
  postV1beta1ParentDatasetsRouteHandler,
  postV1beta1ParentEvaluationJobsRouteHandler,
  postV1beta1ParentExampleComparisonsSearchRouteHandler,
  postV1beta1ParentFeedbackMessagesRouteHandler,
  postV1beta1ParentImageLabelRouteHandler,
  postV1beta1ParentInstructionsRouteHandler,
  postV1beta1ParentTextLabelRouteHandler,
  postV1beta1ParentVideoLabelRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(getV1beta1NameCancelRoute, getV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameExportDataRoute, postV1beta1NameExportDataRouteHandler)
  .openapi(postV1beta1NameImportDataRoute, postV1beta1NameImportDataRouteHandler)
  .openapi(postV1beta1NamePauseRoute, postV1beta1NamePauseRouteHandler)
  .openapi(postV1beta1NameResumeRoute, postV1beta1NameResumeRouteHandler)
  .openapi(getV1beta1ParentAnnotatedDatasetsRoute, getV1beta1ParentAnnotatedDatasetsRouteHandler)
  .openapi(getV1beta1ParentAnnotationSpecSetsRoute, getV1beta1ParentAnnotationSpecSetsRouteHandler)
  .openapi(
    postV1beta1ParentAnnotationSpecSetsRoute,
    postV1beta1ParentAnnotationSpecSetsRouteHandler,
  )
  .openapi(getV1beta1ParentDataItemsRoute, getV1beta1ParentDataItemsRouteHandler)
  .openapi(getV1beta1ParentDatasetsRoute, getV1beta1ParentDatasetsRouteHandler)
  .openapi(postV1beta1ParentDatasetsRoute, postV1beta1ParentDatasetsRouteHandler)
  .openapi(getV1beta1ParentEvaluationJobsRoute, getV1beta1ParentEvaluationJobsRouteHandler)
  .openapi(postV1beta1ParentEvaluationJobsRoute, postV1beta1ParentEvaluationJobsRouteHandler)
  .openapi(getV1beta1ParentEvaluationsSearchRoute, getV1beta1ParentEvaluationsSearchRouteHandler)
  .openapi(
    postV1beta1ParentExampleComparisonsSearchRoute,
    postV1beta1ParentExampleComparisonsSearchRouteHandler,
  )
  .openapi(getV1beta1ParentExamplesRoute, getV1beta1ParentExamplesRouteHandler)
  .openapi(getV1beta1ParentFeedbackMessagesRoute, getV1beta1ParentFeedbackMessagesRouteHandler)
  .openapi(postV1beta1ParentFeedbackMessagesRoute, postV1beta1ParentFeedbackMessagesRouteHandler)
  .openapi(getV1beta1ParentFeedbackThreadsRoute, getV1beta1ParentFeedbackThreadsRouteHandler)
  .openapi(postV1beta1ParentImageLabelRoute, postV1beta1ParentImageLabelRouteHandler)
  .openapi(getV1beta1ParentInstructionsRoute, getV1beta1ParentInstructionsRouteHandler)
  .openapi(postV1beta1ParentInstructionsRoute, postV1beta1ParentInstructionsRouteHandler)
  .openapi(postV1beta1ParentTextLabelRoute, postV1beta1ParentTextLabelRouteHandler)
  .openapi(postV1beta1ParentVideoLabelRoute, postV1beta1ParentVideoLabelRouteHandler)

export default app
