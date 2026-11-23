import { OpenAPIHono } from '@hono/zod-openapi'
import { getListPadsRoute, postListPadsRoute } from '../routes'

const app = new OpenAPIHono()

export const listPadsHandler = app
  .openapi(getListPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
