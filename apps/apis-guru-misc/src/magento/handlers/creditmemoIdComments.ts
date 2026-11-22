import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CreditmemoIdCommentsRoute, postV1CreditmemoIdCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const creditmemoIdCommentsHandler = app
  .openapi(getV1CreditmemoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
