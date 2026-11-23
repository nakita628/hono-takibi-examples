import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListComponentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720ListComponentsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListComponentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
