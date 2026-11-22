import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameProtectedResourcesSummaryRoute, getV1ParentCryptoKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1NameProtectedResourcesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCryptoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
