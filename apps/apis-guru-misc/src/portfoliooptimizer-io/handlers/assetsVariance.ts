import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssetsVarianceRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsVarianceHandler = app.openapi(postAssetsVarianceRoute, (c) => {
  throw new Error('Not implemented')
})
