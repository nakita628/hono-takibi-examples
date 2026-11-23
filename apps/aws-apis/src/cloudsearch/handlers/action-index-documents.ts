import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionIndexDocumentsRoute, postActionIndexDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionIndexDocumentsHandler = app
  .openapi(getActionIndexDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionIndexDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
