import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicDatasetItemsIdRoute,
  getApiPublicDatasetItemsIdRoute,
  getApiPublicDatasetItemsRoute,
  postApiPublicDatasetItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetItemsHandler = app
  .openapi(postApiPublicDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicDatasetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicDatasetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
