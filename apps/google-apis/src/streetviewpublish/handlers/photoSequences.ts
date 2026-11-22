import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PhotoSequencesRoute } from '../routes'

const app = new OpenAPIHono()

export const photoSequencesHandler = app.openapi(getV1PhotoSequencesRoute, (c) => {
  throw new Error('Not implemented')
})
