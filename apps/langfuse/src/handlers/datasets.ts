import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPublicV2DatasetsDatasetNameRoute,
  getApiPublicV2DatasetsRoute,
  postApiPublicV2DatasetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(getApiPublicV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2DatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
