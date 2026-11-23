import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFiles202609FilesFileIdGdprDeleteRoute,
  deleteFiles202609FilesFileIdRoute,
  deleteFiles202609FoldersFolderIdRoute,
  deleteFiles202609FoldersFolderPathRoute,
  getFiles202609FilesFileIdDownloadRoute,
  getFiles202609FilesFileIdRoute,
  getFiles202609FilesFileIdSignedUrlRoute,
  getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRoute,
  getFiles202609FilesSearchRoute,
  getFiles202609FilesStatPathRoute,
  getFiles202609FoldersFolderIdRoute,
  getFiles202609FoldersFolderPathRoute,
  getFiles202609FoldersSearchRoute,
  patchFiles202609FilesFileIdRoute,
  patchFiles202609FoldersFolderIdRoute,
  postFiles202609FilesImportFromUrlAsyncRoute,
  postFiles202609FilesRoute,
  postFiles202609FoldersRoute,
  putFiles202609FilesFileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(postFiles202609FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFiles202609FilesImportFromUrlAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FilesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FilesStatPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFiles202609FilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFiles202609FilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFiles202609FilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FilesFileIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFiles202609FilesFileIdGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FilesFileIdSignedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFiles202609FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FoldersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFiles202609FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFiles202609FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FoldersFolderPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFiles202609FoldersFolderPathRoute, (c) => {
    throw new Error('Not implemented')
  })
