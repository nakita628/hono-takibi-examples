import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetRepositorySyncStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720GetRepositorySyncStatusHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetRepositorySyncStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
