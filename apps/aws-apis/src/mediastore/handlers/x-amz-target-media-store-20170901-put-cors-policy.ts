import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901PutCorsPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901PutCorsPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901PutCorsPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
