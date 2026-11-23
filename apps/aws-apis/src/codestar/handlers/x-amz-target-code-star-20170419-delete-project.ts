import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419DeleteProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419DeleteProjectHandler = app.openapi(
  postXAmzTargetCodeStar20170419DeleteProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
