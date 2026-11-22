import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413MergePullRequestByThreeWayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413MergePullRequestByThreeWayHandler = app.openapi(
  postXAmzTargetCodeCommit20150413MergePullRequestByThreeWayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
