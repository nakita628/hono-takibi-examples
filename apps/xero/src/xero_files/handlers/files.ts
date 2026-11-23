import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdAssociationsObjectIdRoute,
  deleteFilesFileIdRoute,
  getFilesFileIdAssociationsRoute,
  getFilesFileIdContentRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  postFilesFileIdAssociationsRoute,
  postFilesFolderIdRoute,
  postFilesRoute,
  putFilesFileIdRoute,
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
