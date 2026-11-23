import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateAccountSettingsHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateAccountSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
