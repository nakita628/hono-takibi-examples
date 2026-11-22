import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetServiceTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetServiceTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetServiceTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
