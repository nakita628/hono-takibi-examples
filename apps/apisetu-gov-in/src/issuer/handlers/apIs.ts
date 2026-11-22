import { OpenAPIHono } from '@hono/zod-openapi'
import { postYourPullDOCRequestAPIPathRoute, postYourPullURIRequestAPIPathRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postYourPullDOCRequestAPIPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYourPullURIRequestAPIPathRoute, (c) => {
    throw new Error('Not implemented')
  })
