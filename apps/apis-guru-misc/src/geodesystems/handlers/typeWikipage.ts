import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeWikipageRoute } from '../routes'

const app = new OpenAPIHono()

export const typeWikipageHandler = app.openapi(getRepositorySearchTypeWikipageRoute, (c) => {
  throw new Error('Not implemented')
})
