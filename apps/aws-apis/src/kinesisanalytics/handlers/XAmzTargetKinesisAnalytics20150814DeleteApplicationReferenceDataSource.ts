import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
