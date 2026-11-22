import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdatePullRequestStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413UpdatePullRequestStatusHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdatePullRequestStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
