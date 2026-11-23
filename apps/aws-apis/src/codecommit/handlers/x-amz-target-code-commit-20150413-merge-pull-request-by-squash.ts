import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413MergePullRequestBySquashRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413MergePullRequestBySquashHandler = app.openapi(
  postXAmzTargetCodeCommit20150413MergePullRequestBySquashRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
