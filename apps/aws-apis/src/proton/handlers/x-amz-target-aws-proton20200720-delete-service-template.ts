import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteServiceTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720DeleteServiceTemplateHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteServiceTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
