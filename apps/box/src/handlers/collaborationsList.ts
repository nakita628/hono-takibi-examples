import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCollaborationsRoute,
  getFilesFileIdCollaborationsRoute,
  getFoldersFolderIdCollaborationsRoute,
  getGroupsGroupIdCollaborationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collaborationsListHandler = app
  .openapi(getFilesFileIdCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
