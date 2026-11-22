import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioSamRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioSamHandler = app.openapi(getRepositorySearchTypeBioSamRoute, (c) => {
  throw new Error('Not implemented')
})
