import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointNoaaTowerRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointNoaaTowerHandler = app.openapi(
  getRepositorySearchTypeTypePointNoaaTowerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
