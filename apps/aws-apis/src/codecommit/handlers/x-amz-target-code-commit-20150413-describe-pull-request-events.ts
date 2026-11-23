import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DescribePullRequestEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413DescribePullRequestEventsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DescribePullRequestEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
