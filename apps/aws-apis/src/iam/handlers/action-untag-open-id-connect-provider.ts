import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUntagOpenIDConnectProviderRoute,
  postActionUntagOpenIDConnectProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUntagOpenIdConnectProviderHandler = app
  .openapi(getActionUntagOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
