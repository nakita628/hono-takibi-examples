import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CouponsDeleteByCodesRoute } from '../routes'

const app = new OpenAPIHono()

export const couponsDeleteByCodesHandler = app.openapi(postV1CouponsDeleteByCodesRoute, (c) => {
  throw new Error('Not implemented')
})
