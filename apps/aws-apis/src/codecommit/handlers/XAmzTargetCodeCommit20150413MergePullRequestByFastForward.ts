import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413MergePullRequestByFastForwardRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413MergePullRequestByFastForwardHandler = app.openapi(
  postXAmzTargetCodeCommit20150413MergePullRequestByFastForwardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
