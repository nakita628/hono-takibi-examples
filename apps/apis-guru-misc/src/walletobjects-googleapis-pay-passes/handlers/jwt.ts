import { OpenAPIHono } from '@hono/zod-openapi'
import { postWalletobjectsV1JwtRoute } from '../routes'

const app = new OpenAPIHono()

export const jwtHandler = app.openapi(postWalletobjectsV1JwtRoute, (c) => {
  throw new Error('Not implemented')
})
