import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiKernelsNamespaceRepoRevisionRevRoute,
  getApiKernelsNamespaceRepoRoute,
  getApiKernelsNamespaceRepoScanRoute,
  getApiKernelsRoute,
  postApiKernelsNamespaceRepoLfsFilesDuplicateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kernelsHandler = app
  .openapi(postApiKernelsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsNamespaceRepoScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKernelsNamespaceRepoRevisionRevRoute, (c) => {
    throw new Error('Not implemented')
  })
