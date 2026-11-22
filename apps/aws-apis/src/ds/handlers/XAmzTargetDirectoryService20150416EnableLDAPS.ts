import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416EnableLDAPSRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416EnableLDAPSHandler = app.openapi(
  postXAmzTargetDirectoryService20150416EnableLDAPSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
