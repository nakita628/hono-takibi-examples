import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2WorkspacesDestroyManyRoute,
  deleteApiV2WorkspacesWorkspaceIdRoute,
  getApiV2WorkspacesRoute,
  getApiV2WorkspacesWorkspaceIdRoute,
  postApiV2WorkspacesRoute,
  putApiV2WorkspacesReorderRoute,
  putApiV2WorkspacesWorkspaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getApiV2WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WorkspacesDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2WorkspacesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
