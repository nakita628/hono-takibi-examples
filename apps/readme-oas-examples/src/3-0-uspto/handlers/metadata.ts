import { OpenAPIHono } from '@hono/zod-openapi'
import { getDatasetVersionFieldsRoute, getRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetVersionFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
