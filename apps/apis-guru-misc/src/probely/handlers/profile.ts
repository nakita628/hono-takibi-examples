import { OpenAPIHono } from '@hono/zod-openapi'
import { getProfileIndexRoute, postProfileChangePasswordIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getProfileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileChangePasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
