import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdateCommentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413UpdateCommentHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdateCommentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
