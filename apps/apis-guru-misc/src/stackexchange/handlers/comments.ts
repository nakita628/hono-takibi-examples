import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommentsIdsRoute,
  getCommentsRoute,
  postCommentsIdDeleteRoute,
  postCommentsIdEditRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
