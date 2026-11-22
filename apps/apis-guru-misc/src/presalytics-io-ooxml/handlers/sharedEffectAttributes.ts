import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedEffectAttributesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedEffectAttributesHandler = app.openapi(getSharedEffectAttributesIdRoute, (c) => {
  throw new Error('Not implemented')
})
