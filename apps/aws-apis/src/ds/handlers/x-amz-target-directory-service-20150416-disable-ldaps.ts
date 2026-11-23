import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DisableLDAPSRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DisableLdapsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DisableLDAPSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
