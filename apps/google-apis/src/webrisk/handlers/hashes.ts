import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1HashesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const hashesHandler = app.openapi(getV1HashesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
