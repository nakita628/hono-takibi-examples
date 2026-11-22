import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413CreatePullRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413CreatePullRequestHandler = app.openapi(
  postXAmzTargetCodeCommit20150413CreatePullRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
