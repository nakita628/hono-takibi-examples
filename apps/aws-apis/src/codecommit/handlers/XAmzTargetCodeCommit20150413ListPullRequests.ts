import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413ListPullRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413ListPullRequestsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413ListPullRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
