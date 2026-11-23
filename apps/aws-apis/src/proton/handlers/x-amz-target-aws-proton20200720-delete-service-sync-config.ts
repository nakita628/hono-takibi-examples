import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteServiceSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720DeleteServiceSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteServiceSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
