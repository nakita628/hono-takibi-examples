import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesIdRoute,
  deleteFilesRoute,
  getFilesIdRoute,
  getFilesRoute,
  patchFilesIdRoute,
  patchFilesRoute,
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
  .openapi(patchFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
