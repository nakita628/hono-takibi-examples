import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921PutRegistryScanningConfigurationHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
