import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioDicomRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioDicomHandler = app.openapi(getRepositorySearchTypeBioDicomRoute, (c) => {
  throw new Error('Not implemented')
})
