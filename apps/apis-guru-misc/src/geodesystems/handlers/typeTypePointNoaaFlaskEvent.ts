import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointNoaaFlaskEventRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointNoaaFlaskEventHandler = app.openapi(
  getRepositorySearchTypeTypePointNoaaFlaskEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
