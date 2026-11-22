import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFileDownloadPhpRoute,
  getApiFileDownloadZipFilePhpRoute,
  getApiFileGetFileListPhpRoute,
  getApiFileSnippetPhpRoute,
  getApiFileThumbnailPhpRoute,
  getApiFileZipStatusPhpRoute,
  postApiFileCopyFilesPhpRoute,
  postApiFileCreateFilePhpRoute,
  postApiFileDeleteFilesPhpRoute,
  postApiFileDownloadZipPhpRoute,
  postApiFileExtractZipPhpRoute,
  postApiFileMoveFilesPhpRoute,
  putApiFileRenameFilePhpRoute,
  putApiFileSaveFilePhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(postApiFileCopyFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileCreateFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileDeleteFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileDownloadPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileDownloadZipPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileDownloadZipFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileExtractZipPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileGetFileListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileMoveFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiFileRenameFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiFileSaveFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileSnippetPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileThumbnailPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileZipStatusPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
