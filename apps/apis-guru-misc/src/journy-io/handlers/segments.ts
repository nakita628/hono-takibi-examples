import { OpenAPIHono } from '@hono/zod-openapi'
import { getSegmentsAccountsRoute, getSegmentsUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(getSegmentsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
