import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioSraRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioSraHandler = app.openapi(getRepositorySearchTypeBioSraRoute, (c) => {
  throw new Error('Not implemented')
})
