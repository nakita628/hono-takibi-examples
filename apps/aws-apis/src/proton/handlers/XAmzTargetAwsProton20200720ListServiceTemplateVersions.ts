import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServiceTemplateVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListServiceTemplateVersionsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListServiceTemplateVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
