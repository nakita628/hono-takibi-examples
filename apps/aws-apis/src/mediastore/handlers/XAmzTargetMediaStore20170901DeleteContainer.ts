import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901DeleteContainerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901DeleteContainerHandler = app.openapi(
  postXAmzTargetMediaStore20170901DeleteContainerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
