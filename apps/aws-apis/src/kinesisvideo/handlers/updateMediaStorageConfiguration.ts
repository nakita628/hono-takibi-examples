import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateMediaStorageConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateMediaStorageConfigurationHandler = app.openapi(
  postUpdateMediaStorageConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
