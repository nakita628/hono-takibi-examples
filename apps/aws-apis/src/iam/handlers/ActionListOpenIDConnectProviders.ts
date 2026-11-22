import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListOpenIDConnectProvidersRoute,
  postActionListOpenIDConnectProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListOpenIDConnectProvidersHandler = app
  .openapi(getActionListOpenIDConnectProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListOpenIDConnectProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
