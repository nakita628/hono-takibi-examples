import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteServiceTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720DeleteServiceTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteServiceTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
