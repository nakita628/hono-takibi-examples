import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetTemplateSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetTemplateSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetTemplateSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
