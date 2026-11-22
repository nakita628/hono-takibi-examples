import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointIdvRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointIdvHandler = app.openapi(
  getRepositorySearchTypeTypePointIdvRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
