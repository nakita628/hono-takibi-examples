import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateOpenIDConnectProviderThumbprintRoute,
  postActionUpdateOpenIDConnectProviderThumbprintRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateOpenIdConnectProviderThumbprintHandler = app
  .openapi(getActionUpdateOpenIDConnectProviderThumbprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateOpenIDConnectProviderThumbprintRoute, (c) => {
    throw new Error('Not implemented')
  })
