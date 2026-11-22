import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateExperimentsFeedbackScoresNamesRoute,
  getV1PrivateExperimentsGroupsAggregationsRoute,
  getV1PrivateExperimentsGroupsRoute,
  getV1PrivateExperimentsIdRoute,
  getV1PrivateExperimentsItemsIdRoute,
  getV1PrivateExperimentsRoute,
  patchV1PrivateExperimentsBatchRoute,
  patchV1PrivateExperimentsIdRoute,
  postV1PrivateExperimentsDeleteRoute,
  postV1PrivateExperimentsExecuteRoute,
  postV1PrivateExperimentsFinishRoute,
  postV1PrivateExperimentsItemsDeleteRoute,
  postV1PrivateExperimentsItemsRoute,
  postV1PrivateExperimentsItemsStreamRoute,
  postV1PrivateExperimentsRoute,
  postV1PrivateExperimentsStreamRoute,
  putV1PrivateExperimentsCancelRoute,
  putV1PrivateExperimentsItemsBulkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(patchV1PrivateExperimentsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateExperimentsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsItemsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateExperimentsItemsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsGroupsAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateExperimentsItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsItemsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateExperimentsStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
