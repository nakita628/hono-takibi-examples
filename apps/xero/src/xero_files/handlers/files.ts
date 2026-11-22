import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdAssociationsObjectIdRoute,
  deleteFilesFileIdRoute,
  deleteFoldersFolderIdRoute,
  getAssociationsCountRoute,
  getAssociationsObjectIdRoute,
  getFilesFileIdAssociationsRoute,
  getFilesFileIdContentRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  getFoldersFolderIdRoute,
  getFoldersRoute,
  getInboxRoute,
  postFilesFileIdAssociationsRoute,
  postFilesFolderIdRoute,
  postFilesRoute,
  postFoldersRoute,
  putFilesFileIdRoute,
  putFoldersFolderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdAssociationsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
