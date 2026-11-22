import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreativesCrvIdRoute, patchCreativesCrvIdRoute, postCreativesRoute } from '../routes'

const app = new OpenAPIHono()

export const creativesHandler = app
  .openapi(postCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreativesCrvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCreativesCrvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
