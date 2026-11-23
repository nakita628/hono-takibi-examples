import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateOpenIDConnectProviderRoute,
  postActionCreateOpenIDConnectProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateOpenIdConnectProviderHandler = app
  .openapi(getActionCreateOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
