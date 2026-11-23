import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720DeleteRepositoryHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
