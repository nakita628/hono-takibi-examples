import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUuidStreamRoute, putUuidStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const streamAudioHandler = app
  .openapi(deleteUuidStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUuidStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
