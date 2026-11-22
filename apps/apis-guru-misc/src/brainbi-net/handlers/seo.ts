import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSeoRankingLatestRoute } from '../routes'

const app = new OpenAPIHono()

export const seoHandler = app.openapi(getApiSeoRankingLatestRoute, (c) => {
  throw new Error('Not implemented')
})
