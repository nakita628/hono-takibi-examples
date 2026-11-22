import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiVersionAccountPromoCodesRoute } from '../routes'

const app = new OpenAPIHono()

export const promoCreditsHandler = app.openapi(postApiVersionAccountPromoCodesRoute, (c) => {
  throw new Error('Not implemented')
})
