import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetCommentsForPullRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetCommentsForPullRequestHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetCommentsForPullRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
