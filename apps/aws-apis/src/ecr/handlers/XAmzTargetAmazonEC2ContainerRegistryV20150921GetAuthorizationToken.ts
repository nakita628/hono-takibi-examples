import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenRoute,
    (c) => {},
  )
