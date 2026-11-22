import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFiles202609FilesFileIdGdprDeleteRoute,
  deleteFiles202609FilesFileIdRoute,
  getFiles202609FilesFileIdDownloadRoute,
  getFiles202609FilesFileIdRoute,
  getFiles202609FilesFileIdSignedUrlRoute,
  getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRoute,
  getFiles202609FilesSearchRoute,
  getFiles202609FilesStatPathRoute,
  patchFiles202609FilesFileIdRoute,
  postFiles202609FilesImportFromUrlAsyncRoute,
  postFiles202609FilesRoute,
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
