import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetResourcesSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720GetResourcesSummaryHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetResourcesSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
