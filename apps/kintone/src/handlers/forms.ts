import { OpenAPIHono } from '@hono/zod-openapi'
import { getKGuestGuestSpaceIdV1FormJsonRoute, getKV1FormJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const formsHandler = app
  .openapi(getKGuestGuestSpaceIdV1FormJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1FormJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
