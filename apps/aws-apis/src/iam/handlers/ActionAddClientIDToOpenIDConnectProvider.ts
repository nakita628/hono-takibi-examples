import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddClientIDToOpenIDConnectProviderRoute,
  postActionAddClientIDToOpenIDConnectProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAddClientIDToOpenIDConnectProviderHandler = app
  .openapi(getActionAddClientIDToOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddClientIDToOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
