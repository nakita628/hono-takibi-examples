import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommentsIdRoute,
  deleteCommentsRoute,
  getCommentsIdRoute,
  getCommentsRoute,
  patchCommentsIdRoute,
  patchCommentsRoute,
  postCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
