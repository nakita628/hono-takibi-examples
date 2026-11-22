import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssetsSkewnessRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsSkewnessHandler = app.openapi(postAssetsSkewnessRoute, (c) => {
  throw new Error('Not implemented')
})
