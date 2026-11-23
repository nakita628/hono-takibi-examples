import { OpenAPIHono } from '@hono/zod-openapi'
import { getPromotionalCodesRoute, postPromotionalCodesRoute } from '../routes'

const app = new OpenAPIHono()

export const promotionalCodesHandler = app
  .openapi(getPromotionalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPromotionalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
