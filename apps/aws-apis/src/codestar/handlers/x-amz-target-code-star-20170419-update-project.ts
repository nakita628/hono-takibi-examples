import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419UpdateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419UpdateProjectHandler = app.openapi(
  postXAmzTargetCodeStar20170419UpdateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
