import { OpenAPIHono } from '@hono/zod-openapi'
import { getUuidRoute, getUuidVersionVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const uuidGenerationHandler = app
  .openapi(getUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUuidVersionVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
