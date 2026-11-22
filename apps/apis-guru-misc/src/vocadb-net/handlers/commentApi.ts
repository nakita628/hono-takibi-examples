import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCommentsEntryTypeCommentsCommentIdRoute,
  getApiCommentsEntryTypeCommentsRoute,
  getApiCommentsRoute,
  postApiCommentsEntryTypeCommentsCommentIdRoute,
  postApiCommentsEntryTypeCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentApiHandler = app
  .openapi(getApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsEntryTypeCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommentsEntryTypeCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCommentsEntryTypeCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommentsEntryTypeCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
