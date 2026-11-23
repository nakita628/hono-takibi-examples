import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteOpenIDConnectProviderRoute,
  postActionDeleteOpenIDConnectProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteOpenIdConnectProviderHandler = app
  .openapi(getActionDeleteOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteOpenIDConnectProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
