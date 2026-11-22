import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeMbCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeMbCollectionHandler = app.openapi(
  getRepositorySearchTypeTypeMbCollectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
