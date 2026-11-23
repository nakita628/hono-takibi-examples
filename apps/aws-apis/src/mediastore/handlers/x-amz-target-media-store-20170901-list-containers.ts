import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901ListContainersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901ListContainersHandler = app.openapi(
  postXAmzTargetMediaStore20170901ListContainersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
