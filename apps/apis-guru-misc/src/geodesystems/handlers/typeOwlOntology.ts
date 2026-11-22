import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeOwlOntologyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeOwlOntologyHandler = app.openapi(getRepositorySearchTypeOwlOntologyRoute, (c) => {
  throw new Error('Not implemented')
})
