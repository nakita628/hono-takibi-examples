import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ConnectionsResolveEnablementForSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const fusionEnablementResolverHandler = app.openapi(
  postV1ConnectionsResolveEnablementForSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
