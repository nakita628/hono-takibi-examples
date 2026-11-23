import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateEnvironmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CreateEnvironmentTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateEnvironmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
