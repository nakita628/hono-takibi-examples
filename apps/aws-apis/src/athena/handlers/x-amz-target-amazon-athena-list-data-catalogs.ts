import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListDataCatalogsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListDataCatalogsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListDataCatalogsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
