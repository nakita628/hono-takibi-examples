import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419CreateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419CreateProjectHandler = app.openapi(
  postXAmzTargetCodeStar20170419CreateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
