import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeCertificatesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeCertificatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
