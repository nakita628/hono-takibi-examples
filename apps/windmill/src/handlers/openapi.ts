import { OpenAPIHono } from '@hono/zod-openapi'
import { postWWorkspaceOpenapiDownloadRoute, postWWorkspaceOpenapiGenerateRoute } from '../routes'

const app = new OpenAPIHono()

export const openapiHandler = app
  .openapi(postWWorkspaceOpenapiGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOpenapiDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
