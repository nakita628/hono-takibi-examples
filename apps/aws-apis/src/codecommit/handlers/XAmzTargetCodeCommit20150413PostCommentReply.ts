import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413PostCommentReplyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413PostCommentReplyHandler = app.openapi(
  postXAmzTargetCodeCommit20150413PostCommentReplyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
