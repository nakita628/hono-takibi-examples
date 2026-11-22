import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ImportCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101ImportCertificateHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ImportCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
