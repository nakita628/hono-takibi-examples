import { OpenAPIHono } from '@hono/zod-openapi'
import { getViewFolderRoute, getViewFolderUniquePathsRoute } from '../routes'

const app = new OpenAPIHono()

export const viewHandler = app
  .openapi(getViewFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewFolderUniquePathsRoute, (c) => {
    throw new Error('Not implemented')
  })
