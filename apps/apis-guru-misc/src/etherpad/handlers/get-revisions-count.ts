import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetRevisionsCountRoute, postGetRevisionsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const getRevisionsCountHandler = app
  .openapi(getGetRevisionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetRevisionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
