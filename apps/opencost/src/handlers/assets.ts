import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app.openapi(getAssetsRoute, (c) => {
  throw new Error('Not implemented')
})
