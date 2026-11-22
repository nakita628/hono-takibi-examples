import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGlossaryRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGlossaryHandler = app.openapi(getRepositorySearchTypeGlossaryRoute, (c) => {
  throw new Error('Not implemented')
})
