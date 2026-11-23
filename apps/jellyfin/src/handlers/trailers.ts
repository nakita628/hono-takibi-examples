import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrailersItemIdSimilarRoute, getTrailersRoute } from '../routes'

const app = new OpenAPIHono()

export const trailersHandler = app
  .openapi(getTrailersItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrailersRoute, (c) => {
    throw new Error('Not implemented')
  })
