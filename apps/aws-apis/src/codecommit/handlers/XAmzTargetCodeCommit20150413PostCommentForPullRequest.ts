import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413PostCommentForPullRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413PostCommentForPullRequestHandler = app.openapi(
  postXAmzTargetCodeCommit20150413PostCommentForPullRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
