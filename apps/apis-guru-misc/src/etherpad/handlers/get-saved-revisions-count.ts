import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetSavedRevisionsCountRoute, postGetSavedRevisionsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const getSavedRevisionsCountHandler = app
  .openapi(getGetSavedRevisionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetSavedRevisionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
