import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateEnvironmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720UpdateEnvironmentTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateEnvironmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
