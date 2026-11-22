import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServiceTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListServiceTemplatesHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListServiceTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
