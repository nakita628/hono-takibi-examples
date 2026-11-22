import { OpenAPIHono } from '@hono/zod-openapi'
import { getWikiRestApiSearchRoute, getWikiRestApiSearchUserRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getWikiRestApiSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSearchUserRoute, (c) => {
    throw new Error('Not implemented')
  })
