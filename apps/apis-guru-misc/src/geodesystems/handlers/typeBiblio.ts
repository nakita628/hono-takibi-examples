import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBiblioRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBiblioHandler = app.openapi(getRepositorySearchTypeBiblioRoute, (c) => {
  throw new Error('Not implemented')
})
