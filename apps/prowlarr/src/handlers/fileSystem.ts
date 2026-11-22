import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1FilesystemRoute, getApiV1FilesystemTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const fileSystemHandler = app
  .openapi(getApiV1FilesystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilesystemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
