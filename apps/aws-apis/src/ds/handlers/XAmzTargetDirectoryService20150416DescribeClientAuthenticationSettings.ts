import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsHandler =
  app.openapi(
    postXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
