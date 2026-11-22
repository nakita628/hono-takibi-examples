import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssetsKurtosisRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsKurtosisHandler = app.openapi(postAssetsKurtosisRoute, (c) => {
  throw new Error('Not implemented')
})
