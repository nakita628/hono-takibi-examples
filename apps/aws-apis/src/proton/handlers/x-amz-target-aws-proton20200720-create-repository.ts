import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CreateRepositoryHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
