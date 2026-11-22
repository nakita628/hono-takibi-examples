import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeNcssRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeNcssHandler = app.openapi(getRepositorySearchTypeTypeNcssRoute, (c) => {
  throw new Error('Not implemented')
})
