import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeMediaPhotoalbumRoute } from '../routes'

const app = new OpenAPIHono()

export const typeMediaPhotoalbumHandler = app.openapi(
  getRepositorySearchTypeMediaPhotoalbumRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
