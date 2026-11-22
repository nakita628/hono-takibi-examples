import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdTrashRoute,
  getFilesFileIdTrashRoute,
  postFilesFileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trashedFilesHandler = app
  .openapi(postFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
