import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteEnvironmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720DeleteEnvironmentTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteEnvironmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
