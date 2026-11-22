import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdatePullRequestTitleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413UpdatePullRequestTitleHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdatePullRequestTitleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
