import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioFastqRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioFastqHandler = app.openapi(getRepositorySearchTypeBioFastqRoute, (c) => {
  throw new Error('Not implemented')
})
