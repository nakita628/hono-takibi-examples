import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdNamespacesNamespaceIdRoute,
  getAppsAppIdNamespacesRoute,
  patchAppsAppIdNamespacesNamespaceIdRoute,
  postAppsAppIdNamespacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(getAppsAppIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsAppIdNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
