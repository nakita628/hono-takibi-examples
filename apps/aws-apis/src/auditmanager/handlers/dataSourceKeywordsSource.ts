import { OpenAPIHono } from '@hono/zod-openapi'
import { getDataSourceKeywordsSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const dataSourceKeywordsSourceHandler = app.openapi(
  getDataSourceKeywordsSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
