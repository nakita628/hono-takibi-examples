import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeCopyProductStatusHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
