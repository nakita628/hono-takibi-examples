import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesPathRoute,
  getFilesPathRoute,
  patchFilesPathRoute,
  postFilesPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(deleteFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
