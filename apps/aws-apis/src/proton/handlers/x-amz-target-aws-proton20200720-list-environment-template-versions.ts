import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
