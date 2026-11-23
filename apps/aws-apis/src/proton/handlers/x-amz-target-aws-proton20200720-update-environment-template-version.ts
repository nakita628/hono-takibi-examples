import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
