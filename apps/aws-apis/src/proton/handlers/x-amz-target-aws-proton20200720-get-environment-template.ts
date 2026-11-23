import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetEnvironmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720GetEnvironmentTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetEnvironmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
