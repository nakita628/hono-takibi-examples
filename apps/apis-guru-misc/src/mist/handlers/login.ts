import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1LoginLookupRoute, postApiV1LoginRoute, postApiV1LogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app
  .openapi(postApiV1LoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
