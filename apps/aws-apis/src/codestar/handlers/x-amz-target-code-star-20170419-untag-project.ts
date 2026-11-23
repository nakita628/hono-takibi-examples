import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419UntagProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419UntagProjectHandler = app.openapi(
  postXAmzTargetCodeStar20170419UntagProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
