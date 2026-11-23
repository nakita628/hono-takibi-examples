import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720ListRepositorySyncDefinitionsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
