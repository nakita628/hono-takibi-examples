import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetPullRequestOverrideStateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetPullRequestOverrideStateHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetPullRequestOverrideStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
