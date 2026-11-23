import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceAssociateTagOptionWithResourceHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
