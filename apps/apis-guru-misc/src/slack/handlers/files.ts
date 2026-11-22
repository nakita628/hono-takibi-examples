import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilesInfoRoute,
  getFilesListRoute,
  postFilesDeleteRoute,
  postFilesRevokePublicURLRoute,
  postFilesSharedPublicURLRoute,
  postFilesUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(postFilesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRevokePublicURLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesSharedPublicURLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
