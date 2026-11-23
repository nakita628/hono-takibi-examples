import { OpenAPIHono } from '@hono/zod-openapi'
import { getUuidRoute, getUuidVersionVersionRoute, postUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const uuidHandler = app
  .openapi(getUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUuidVersionVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
