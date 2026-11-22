import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiDataentitiesDataEntityNameDocumentsIdClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app.openapi(
  postApiDataentitiesDataEntityNameDocumentsIdClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
