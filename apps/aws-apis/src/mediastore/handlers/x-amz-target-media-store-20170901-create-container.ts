import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901CreateContainerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901CreateContainerHandler = app.openapi(
  postXAmzTargetMediaStore20170901CreateContainerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
