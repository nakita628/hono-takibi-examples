import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CreditmemoIdRoute, putV1CreditmemoIdRoute } from '../routes'

const app = new OpenAPIHono()

export const creditmemoIdHandler = app
  .openapi(getV1CreditmemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
