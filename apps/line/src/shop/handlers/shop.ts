import { OpenAPIHono } from '@hono/zod-openapi'
import { postShopV3MissionRoute } from '../routes'

const app = new OpenAPIHono()

export const shopHandler = app.openapi(postShopV3MissionRoute, (c) => {
  throw new Error('Not implemented')
})
