import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetAccessControlEffectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceGetAccessControlEffectHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetAccessControlEffectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
