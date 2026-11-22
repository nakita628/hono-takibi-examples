import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioFastaRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioFastaHandler = app.openapi(getRepositorySearchTypeBioFastaRoute, (c) => {
  throw new Error('Not implemented')
})
