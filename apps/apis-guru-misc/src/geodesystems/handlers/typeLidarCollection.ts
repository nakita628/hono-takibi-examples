import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeLidarCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const typeLidarCollectionHandler = app.openapi(
  getRepositorySearchTypeLidarCollectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
