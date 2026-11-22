import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2MeRoute, patchV2MeRoute } from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getV2MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2MeRoute, (c) => {
    throw new Error('Not implemented')
  })
