import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DeleteCertificateHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
