import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasetsDatasetNameContentRoute,
  deleteDatasetsDatasetNameRoute,
  getDatasetsDatasetNameContentRoute,
  getDatasetsDatasetNameContentsRoute,
  getDatasetsDatasetNameRoute,
  getDatasetsRoute,
  postDatasetsDatasetNameContentRoute,
  postDatasetsRoute,
  putDatasetsDatasetNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(postDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetsDatasetNameContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetsDatasetNameContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetNameContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetNameContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
