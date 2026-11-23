import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeProvisionedProductHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
