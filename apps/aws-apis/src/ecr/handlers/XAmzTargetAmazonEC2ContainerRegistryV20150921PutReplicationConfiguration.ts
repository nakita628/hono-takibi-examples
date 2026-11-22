import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
