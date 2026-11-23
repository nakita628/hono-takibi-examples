import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720GetEnvironmentTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
