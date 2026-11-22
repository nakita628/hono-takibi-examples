import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DisableLDAPSRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DisableLDAPSHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DisableLDAPSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
