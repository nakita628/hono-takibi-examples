import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DatasetLabelsLabelIdRoute,
  deleteV1DatasetsDatasetIdentifierLabelsLabelIdRoute,
  deleteV1DatasetsDatasetIdentifierSplitsSplitIdRoute,
  deleteV1DatasetsIdRoute,
  getV1DatasetLabelsLabelIdRoute,
  getV1DatasetLabelsRoute,
  getV1DatasetsDatasetIdentifierLabelsRoute,
  getV1DatasetsDatasetIdentifierSplitsRoute,
  getV1DatasetsIdCsvRoute,
  getV1DatasetsIdExamplesRoute,
  getV1DatasetsIdJsonlOpenaiEvalsRoute,
  getV1DatasetsIdJsonlOpenaiFtRoute,
  getV1DatasetsIdJsonlRoute,
  getV1DatasetsIdRoute,
  getV1DatasetsIdVersionsRoute,
  getV1DatasetsRoute,
  patchV1DatasetLabelsLabelIdRoute,
  patchV1DatasetsDatasetIdentifierSplitsSplitIdRoute,
  postV1DatasetLabelsRoute,
  postV1DatasetsDatasetIdentifierSplitsRoute,
  postV1DatasetsUploadRoute,
  putV1DatasetsDatasetIdentifierLabelsLabelIdRoute,
  putV1DatasetsDatasetIdentifierLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(getV1DatasetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DatasetLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsDatasetIdentifierLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DatasetsDatasetIdentifierLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DatasetsDatasetIdentifierLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsDatasetIdentifierLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsDatasetIdentifierSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetsDatasetIdentifierSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DatasetsDatasetIdentifierSplitsSplitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsDatasetIdentifierSplitsSplitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdJsonlOpenaiFtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdJsonlOpenaiEvalsRoute, (c) => {
    throw new Error('Not implemented')
  })
