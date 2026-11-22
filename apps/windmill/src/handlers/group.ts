import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsDeleteNameRoute,
  deleteWWorkspaceGroupsDeleteNameRoute,
  getGroupsExportRoute,
  getGroupsGetNameRoute,
  getGroupsListRoute,
  getGroupsListWithWorkspacesRoute,
  getWWorkspaceGroupsGetNameRoute,
  getWWorkspaceGroupsHistoryGetNameRoute,
  getWWorkspaceGroupsListnamesRoute,
  getWWorkspaceGroupsListRoute,
  postGroupsAdduserNameRoute,
  postGroupsCreateRoute,
  postGroupsOverwriteRoute,
  postGroupsRemoveuserNameRoute,
  postGroupsUpdateNameRoute,
  postWWorkspaceGroupsAdduserNameRoute,
  postWWorkspaceGroupsCreateRoute,
  postWWorkspaceGroupsRemoveuserNameRoute,
  postWWorkspaceGroupsUpdateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
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
  .openapi(getWWorkspaceGroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGroupsListnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGroupsDeleteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGroupsGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsAdduserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsRemoveuserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGroupsHistoryGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
