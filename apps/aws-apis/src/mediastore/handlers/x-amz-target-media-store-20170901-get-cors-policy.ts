import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901GetCorsPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901GetCorsPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901GetCorsPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
