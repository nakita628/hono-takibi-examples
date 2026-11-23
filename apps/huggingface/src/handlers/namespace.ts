import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNamespaceRepoResolveRevPathRoute,
  getNamespaceRepoUserAccessReportRoute,
  postNamespaceRepoAskAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespaceHandler = app
  .openapi(getNamespaceRepoResolveRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespaceRepoAskAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespaceRepoUserAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
