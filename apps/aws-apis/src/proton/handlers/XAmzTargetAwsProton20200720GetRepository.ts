import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetRepositoryHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
