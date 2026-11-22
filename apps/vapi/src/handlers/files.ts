import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileIdRoute,
  getFileIdRoute,
  getFileRoute,
  patchFileIdRoute,
  postFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(postFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
