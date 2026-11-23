import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateServiceTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateServiceTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateServiceTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
