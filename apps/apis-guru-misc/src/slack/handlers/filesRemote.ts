import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilesRemoteInfoRoute,
  getFilesRemoteListRoute,
  getFilesRemoteShareRoute,
  postFilesRemoteAddRoute,
  postFilesRemoteRemoveRoute,
  postFilesRemoteUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesRemoteHandler = app
  .openapi(postFilesRemoteAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesRemoteInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesRemoteListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRemoteRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesRemoteShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRemoteUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
