import { OpenAPIHono } from '@hono/zod-openapi'
import { getChargesRoute, postChargesRoute } from '../routes'

const app = new OpenAPIHono()

export const chargesHandler = app
  .openapi(getChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
