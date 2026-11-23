import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchMembersRoute, getSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
