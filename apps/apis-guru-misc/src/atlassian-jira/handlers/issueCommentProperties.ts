import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  getRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  getRestApi3CommentCommentIdPropertiesRoute,
  putRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCommentPropertiesHandler = app
  .openapi(getRestApi3CommentCommentIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3CommentCommentIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3CommentCommentIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3CommentCommentIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
