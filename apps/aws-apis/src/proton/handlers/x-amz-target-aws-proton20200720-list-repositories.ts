import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720ListRepositoriesHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListRepositoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
