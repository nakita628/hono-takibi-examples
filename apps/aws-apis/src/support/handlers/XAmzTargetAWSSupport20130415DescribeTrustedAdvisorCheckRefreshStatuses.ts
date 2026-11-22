import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesHandler =
  app.openapi(
    postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
