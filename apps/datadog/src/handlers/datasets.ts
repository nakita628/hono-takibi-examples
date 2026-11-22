import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DatasetsDatasetIdRoute,
  getApiV2DatasetsDatasetIdRoute,
  getApiV2DatasetsRoute,
  postApiV2DatasetsRoute,
  putApiV2DatasetsDatasetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(getApiV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
