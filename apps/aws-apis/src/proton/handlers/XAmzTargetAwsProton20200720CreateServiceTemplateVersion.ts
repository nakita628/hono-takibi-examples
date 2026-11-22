import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateServiceTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720CreateServiceTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateServiceTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
