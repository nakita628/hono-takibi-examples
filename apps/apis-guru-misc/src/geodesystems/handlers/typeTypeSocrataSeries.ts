import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeSocrataSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeSocrataSeriesHandler = app.openapi(
  getRepositorySearchTypeTypeSocrataSeriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
