import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720DeleteComponentHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
