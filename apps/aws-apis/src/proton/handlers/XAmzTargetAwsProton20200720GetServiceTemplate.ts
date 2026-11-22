import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetServiceTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetServiceTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetServiceTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
