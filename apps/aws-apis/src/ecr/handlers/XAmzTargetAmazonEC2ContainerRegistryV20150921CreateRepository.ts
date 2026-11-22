import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryRoute,
  (c) => {},
)
