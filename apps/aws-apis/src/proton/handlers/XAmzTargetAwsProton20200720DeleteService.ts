import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720DeleteServiceHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
