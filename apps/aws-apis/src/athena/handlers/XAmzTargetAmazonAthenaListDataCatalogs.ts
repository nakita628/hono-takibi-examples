import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListDataCatalogsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListDataCatalogsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListDataCatalogsRoute,
  (c) => {},
)
