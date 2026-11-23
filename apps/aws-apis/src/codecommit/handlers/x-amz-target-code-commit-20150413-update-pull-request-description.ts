import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdatePullRequestDescriptionHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
