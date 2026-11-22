import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ExperimentsExperimentIdRoute,
  deleteV1ExperimentsExperimentIdTagsTagIdentifierRoute,
  getV1DatasetsDatasetIdExperimentsRoute,
  getV1ExperimentsExperimentIdCsvRoute,
  getV1ExperimentsExperimentIdIncompleteEvaluationsRoute,
  getV1ExperimentsExperimentIdIncompleteRunsRoute,
  getV1ExperimentsExperimentIdJsonRoute,
  getV1ExperimentsExperimentIdRoute,
  getV1ExperimentsExperimentIdRunsRoute,
  getV1ExperimentsExperimentIdTagsRoute,
  patchV1ExperimentsExperimentIdRoute,
  postV1DatasetsDatasetIdExperimentsRoute,
  postV1ExperimentEvaluationsRoute,
  postV1ExperimentsExperimentIdRunsRoute,
  postV1ExperimentsExperimentIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(postV1DatasetsDatasetIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsDatasetIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdIncompleteRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsExperimentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsExperimentIdTagsTagIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsExperimentIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsExperimentIdIncompleteEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
