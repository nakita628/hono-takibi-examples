import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsDeleteNameRoute,
  getGroupsExportRoute,
  getGroupsGetNameRoute,
  getGroupsListRoute,
  getGroupsListWithWorkspacesRoute,
  postGroupsAdduserNameRoute,
  postGroupsCreateRoute,
  postGroupsOverwriteRoute,
  postGroupsRemoveuserNameRoute,
  postGroupsUpdateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsListWithWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsDeleteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsAdduserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRemoveuserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsOverwriteRoute, (c) => {
    throw new Error('Not implemented')
  })
