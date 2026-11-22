import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PrivateAuthWorkspaceRoute, postV1PrivateAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const checkHandler = app
  .openapi(postV1PrivateAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAuthWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
