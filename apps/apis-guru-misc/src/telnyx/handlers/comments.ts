import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommentsIdRoute,
  getCommentsRoute,
  patchCommentsIdReadRoute,
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
  .openapi(getCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommentsIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
