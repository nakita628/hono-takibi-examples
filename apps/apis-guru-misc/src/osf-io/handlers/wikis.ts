import { OpenAPIHono } from '@hono/zod-openapi'
import { getWikisWikiIdContentIndexRoute, getWikisWikiIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const wikisHandler = app
  .openapi(getWikisWikiIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikisWikiIdContentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
