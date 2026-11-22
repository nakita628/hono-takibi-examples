import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationRoute,
    (c) => {},
  )
