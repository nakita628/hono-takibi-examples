import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdRoute,
  deleteFilesTrashRoute,
  getFilesFileIdExportRoute,
  getFilesFileIdListLabelsRoute,
  getFilesFileIdRoute,
  getFilesGenerateIdsRoute,
  getFilesRoute,
  patchFilesFileIdRoute,
  postFilesFileIdCopyRoute,
  postFilesFileIdModifyLabelsRoute,
  postFilesFileIdWatchRoute,
  postFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesGenerateIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdListLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdModifyLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
