import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListEnvironmentTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListEnvironmentTemplatesHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListEnvironmentTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
