import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceTrashDeleteIdRoute,
  getWWorkspaceTrashGetIdRoute,
  getWWorkspaceTrashListRoute,
  postWWorkspaceTrashEmptyRoute,
  postWWorkspaceTrashRestoreIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trashHandler = app
  .openapi(getWWorkspaceTrashListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceTrashGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceTrashRestoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceTrashDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceTrashEmptyRoute, (c) => {
    throw new Error('Not implemented')
  })
