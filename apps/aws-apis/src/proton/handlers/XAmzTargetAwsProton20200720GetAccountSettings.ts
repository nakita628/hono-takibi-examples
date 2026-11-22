import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetAccountSettingsHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetAccountSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
