import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssetsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app.openapi(getAssetsIdRoute, (c) => {
  throw new Error('Not implemented')
})
