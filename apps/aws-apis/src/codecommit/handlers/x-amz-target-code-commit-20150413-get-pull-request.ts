import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetPullRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetPullRequestHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetPullRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
