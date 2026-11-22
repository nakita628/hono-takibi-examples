import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsTagGidRoute,
  getTagsRoute,
  getTagsTagGidRoute,
  getTasksTaskGidTagsRoute,
  getWorkspacesWorkspaceGidTagsRoute,
  postTagsRoute,
  postWorkspacesWorkspaceGidTagsRoute,
  putTagsTagGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsTagGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsTagGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
