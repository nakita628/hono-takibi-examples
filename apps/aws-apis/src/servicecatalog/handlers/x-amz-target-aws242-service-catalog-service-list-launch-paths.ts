import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListLaunchPathsHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
