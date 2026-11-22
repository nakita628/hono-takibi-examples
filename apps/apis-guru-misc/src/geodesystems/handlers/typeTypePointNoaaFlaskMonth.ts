import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointNoaaFlaskMonthRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointNoaaFlaskMonthHandler = app.openapi(
  getRepositorySearchTypeTypePointNoaaFlaskMonthRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
