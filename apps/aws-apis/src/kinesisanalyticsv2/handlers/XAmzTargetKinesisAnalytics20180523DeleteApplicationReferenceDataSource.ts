import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
