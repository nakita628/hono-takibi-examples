import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
