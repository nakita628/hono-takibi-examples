import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2VisionDatasetsDatasetIdRoute,
  getV2VisionDatasetsDatasetIdRoute,
  getV2VisionDatasetsRoute,
  getV2VisionDeletionIdRoute,
  postV2VisionDatasetsRoute,
  postV2VisionDatasetsUploadRoute,
  postV2VisionDatasetsUploadSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const visionDatasetsHandler = app
  .openapi(getV2VisionDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionDatasetsUploadSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VisionDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionDeletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
