import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
