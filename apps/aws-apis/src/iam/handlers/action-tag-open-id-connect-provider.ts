import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionTagOpenIDConnectProviderRoute,
  postActionTagOpenIDConnectProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionTagOpenIdConnectProviderHandler = app
  .openapi(getActionTagOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
