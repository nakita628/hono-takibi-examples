import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416EnableLDAPSRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416EnableLdapsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416EnableLDAPSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
