import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeLDAPSSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DescribeLdapsSettingsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeLDAPSSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
