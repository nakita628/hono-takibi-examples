import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBeforeafterRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBeforeafterHandler = app.openapi(getRepositorySearchTypeBeforeafterRoute, (c) => {
  throw new Error('Not implemented')
})
