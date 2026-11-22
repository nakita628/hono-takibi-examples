import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
