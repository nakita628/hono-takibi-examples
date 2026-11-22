import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedEffectsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedEffectsHandler = app.openapi(getSharedEffectsIdRoute, (c) => {
  throw new Error('Not implemented')
})
