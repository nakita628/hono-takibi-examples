import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminZoektShardsNodeIdIndexedNamespacesNamespaceIdRoute,
  getApiV4AdminZoektShardsNodeIdIndexedNamespacesRoute,
  getApiV4AdminZoektShardsRoute,
  patchApiV4AdminZoektNamespacesIdRoute,
  putApiV4AdminZoektProjectsProjectIdIndexRoute,
  putApiV4AdminZoektShardsNodeIdIndexedNamespacesNamespaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codeSearchHandler = app
  .openapi(putApiV4AdminZoektProjectsProjectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4AdminZoektNamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminZoektShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminZoektShardsNodeIdIndexedNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminZoektShardsNodeIdIndexedNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminZoektShardsNodeIdIndexedNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
