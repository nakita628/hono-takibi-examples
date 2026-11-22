import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionImportImageRoute, postActionImportImageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionImportImageHandler = app
  .openapi(getActionImportImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionImportImageRoute, (c) => {
    throw new Error('Not implemented')
  })
