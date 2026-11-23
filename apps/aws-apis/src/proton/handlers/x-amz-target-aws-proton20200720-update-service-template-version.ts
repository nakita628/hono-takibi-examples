import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateServiceTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateServiceTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateServiceTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
