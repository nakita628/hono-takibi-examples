import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CrawlQueryRoute,
  getV1ImagesQueryRoute,
  getV1NewsQueryRoute,
  getV1SearchQueryRoute,
  postV1SerpIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CrawlQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImagesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NewsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SerpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
