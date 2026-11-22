import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3EffectiveTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const effectiveTagsHandler = app.openapi(getV3EffectiveTagsRoute, (c) => {
  throw new Error('Not implemented')
})
