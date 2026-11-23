import { OpenAPIHono } from '@hono/zod-openapi'
import { getListAllPadsRoute, postListAllPadsRoute } from '../routes'

const app = new OpenAPIHono()

export const listAllPadsHandler = app
  .openapi(getListAllPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListAllPadsRoute, (c) => {
    throw new Error('Not implemented')
  })
