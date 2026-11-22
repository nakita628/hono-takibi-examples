import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetOpenIDConnectProviderRoute,
  postActionGetOpenIDConnectProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetOpenIDConnectProviderHandler = app
  .openapi(getActionGetOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
