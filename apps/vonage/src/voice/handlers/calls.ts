import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute, getUuidRoute, postRoute, putUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
