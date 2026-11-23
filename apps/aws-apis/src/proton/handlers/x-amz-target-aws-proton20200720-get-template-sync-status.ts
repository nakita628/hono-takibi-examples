import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetTemplateSyncStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720GetTemplateSyncStatusHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetTemplateSyncStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
