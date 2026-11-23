import { OpenAPIHono } from '@hono/zod-openapi'
import { getRaritiesRarityRoute, getRaritiesRoute } from '../routes'

const app = new OpenAPIHono()

export const raritiesHandler = app
  .openapi(getRaritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRaritiesRarityRoute, (c) => {
    throw new Error('Not implemented')
  })
