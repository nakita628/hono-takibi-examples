import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiDataentitiesAcronymDocumentsIdClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app.openapi(
  postApiDataentitiesAcronymDocumentsIdClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
