import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioSfPdbRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioSfPdbHandler = app.openapi(getRepositorySearchTypeBioSfPdbRoute, (c) => {
  throw new Error('Not implemented')
})
