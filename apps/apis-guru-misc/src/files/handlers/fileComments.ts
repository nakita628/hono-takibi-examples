import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileCommentsIdRoute,
  getFileCommentsFilesPathRoute,
  patchFileCommentsIdRoute,
  postFileCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileCommentsHandler = app
  .openapi(postFileCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileCommentsFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
