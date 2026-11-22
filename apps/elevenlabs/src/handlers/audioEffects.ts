import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AudioEffectsCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const audioEffectsHandler = app.openapi(getV1AudioEffectsCatalogRoute, (c) => {
  throw new Error('Not implemented')
})
