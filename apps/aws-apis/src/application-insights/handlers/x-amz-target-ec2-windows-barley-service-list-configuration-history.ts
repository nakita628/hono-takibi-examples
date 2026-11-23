import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceListConfigurationHistoryHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
