import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchMembersIndexRoute, getSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
