import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceVolumesDeleteNameRoute,
  getWWorkspaceVolumesListRoute,
  getWWorkspaceVolumesStorageRoute,
  postWWorkspaceVolumesCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumeHandler = app
  .openapi(getWWorkspaceVolumesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVolumesStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceVolumesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceVolumesDeleteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
