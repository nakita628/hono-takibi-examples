import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3AffiliatesSearchImagesRoute, getV3AffiliatesSearchVideosRoute } from '../routes'

const app = new OpenAPIHono()

export const affiliateSearchHandler = app
  .openapi(getV3AffiliatesSearchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3AffiliatesSearchVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
