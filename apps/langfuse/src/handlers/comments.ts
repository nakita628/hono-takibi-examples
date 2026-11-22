import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPublicCommentsCommentIdRoute,
  getApiPublicCommentsRoute,
  postApiPublicCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(postApiPublicCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
