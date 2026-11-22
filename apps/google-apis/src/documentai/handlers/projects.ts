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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1beta3HumanReviewConfigReviewDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3NameBatchProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3NameDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3NameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3NameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3NameProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3NameUndeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3ParentEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3ParentProcessorTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3ParentProcessorVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3ParentProcessorVersionsImportProcessorVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3ParentProcessorVersionsTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3ParentProcessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3ParentProcessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta3ParentFetchProcessorTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3ProcessorVersionEvaluateProcessorVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta3ProcessorSetDefaultProcessorVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
