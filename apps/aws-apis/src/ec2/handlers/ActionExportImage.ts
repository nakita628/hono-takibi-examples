import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionExportImageRoute, postActionExportImageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionExportImageHandler = app
  .openapi(getActionExportImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionExportImageRoute, (c) => {
    throw new Error('Not implemented')
  })
