import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveClientIDFromOpenIDConnectProviderRoute,
  postActionRemoveClientIDFromOpenIDConnectProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRemoveClientIdFromOpenIdConnectProviderHandler = app
  .openapi(getActionRemoveClientIDFromOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveClientIDFromOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
