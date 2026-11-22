import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetAccessControlEffectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceGetAccessControlEffectHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetAccessControlEffectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
