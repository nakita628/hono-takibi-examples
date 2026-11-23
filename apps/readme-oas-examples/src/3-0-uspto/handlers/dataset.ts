import { OpenAPIHono } from '@hono/zod-openapi'
import { getDatasetVersionFieldsRoute, postDatasetVersionRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const datasetHandler = app
  .openapi(getDatasetVersionFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetVersionRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
