import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413PutCommentReactionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413PutCommentReactionHandler = app.openapi(
  postXAmzTargetCodeCommit20150413PutCommentReactionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
