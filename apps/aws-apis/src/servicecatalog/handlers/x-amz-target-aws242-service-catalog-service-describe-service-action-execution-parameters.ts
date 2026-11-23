import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDescribeServiceActionExecutionParametersHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
