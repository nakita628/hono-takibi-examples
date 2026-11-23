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
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameExportDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameImportDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAnnotatedDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAnnotationSpecSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAnnotationSpecSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDataItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentEvaluationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentEvaluationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentEvaluationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentExampleComparisonsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentFeedbackMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFeedbackMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentFeedbackThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentImageLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTextLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentVideoLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
