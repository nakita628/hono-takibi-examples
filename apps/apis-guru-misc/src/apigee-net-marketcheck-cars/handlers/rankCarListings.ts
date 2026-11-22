import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchCarActiveRankListingsRoute, postSearchCarActiveRankRoute } from '../routes'

const app = new OpenAPIHono()

export const rankCarListingsHandler = app
  .openapi(postSearchCarActiveRankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchCarActiveRankListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
