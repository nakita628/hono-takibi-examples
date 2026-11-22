import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateServiceTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720CreateServiceTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateServiceTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
