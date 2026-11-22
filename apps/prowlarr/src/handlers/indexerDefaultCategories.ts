import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1IndexerCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const indexerDefaultCategoriesHandler = app.openapi(getApiV1IndexerCategoriesRoute, (c) => {
  throw new Error('Not implemented')
})
