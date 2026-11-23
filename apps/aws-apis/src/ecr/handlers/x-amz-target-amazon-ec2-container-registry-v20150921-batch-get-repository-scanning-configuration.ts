import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
