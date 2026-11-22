import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateContainerServiceRegistryLoginHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
