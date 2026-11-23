import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidateShopperIdRoute } from '../routes'

const app = new OpenAPIHono()

export const validateShopperIdHandler = app.openapi(postValidateShopperIdRoute, (c) => {
  throw new Error('Not implemented')
})
