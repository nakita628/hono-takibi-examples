import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDatasetsNamespaceRepoResolveRevPathRoute,
  getDatasetsNamespaceRepoUserAccessReportRoute,
  postDatasetsNamespaceRepoAskAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(getDatasetsNamespaceRepoResolveRevPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetsNamespaceRepoAskAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsNamespaceRepoUserAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
