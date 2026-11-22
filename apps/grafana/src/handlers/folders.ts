import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderUidRoute,
  getFoldersFolderUidCountsRoute,
  getFoldersFolderUidPermissionsRoute,
  getFoldersFolderUidRoute,
  getFoldersRoute,
  postFoldersFolderUidMoveRoute,
  postFoldersFolderUidPermissionsRoute,
  postFoldersRoute,
  putFoldersFolderUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderUidCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderUidMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderUidPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderUidPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
