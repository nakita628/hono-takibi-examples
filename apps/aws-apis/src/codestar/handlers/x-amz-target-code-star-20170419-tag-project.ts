import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419TagProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419TagProjectHandler = app.openapi(
  postXAmzTargetCodeStar20170419TagProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
