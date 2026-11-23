import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921GetRegistryScanningConfigurationHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
