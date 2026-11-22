import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCommentsIdRoute,
  getApiCommentsIdRoute,
  getApiCommentsRoute,
  patchApiCommentsIdRoute,
  postApiCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
