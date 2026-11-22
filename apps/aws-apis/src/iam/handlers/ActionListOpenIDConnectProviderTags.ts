import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListOpenIDConnectProviderTagsRoute,
  postActionListOpenIDConnectProviderTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListOpenIDConnectProviderTagsHandler = app
  .openapi(getActionListOpenIDConnectProviderTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListOpenIDConnectProviderTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
