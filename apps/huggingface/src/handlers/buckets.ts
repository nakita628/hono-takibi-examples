import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBucketsNamespaceRepoEventsRoute,
  getApiBucketsNamespaceRepoResourceGroupRoute,
  getApiBucketsNamespaceRepoRoute,
  getApiBucketsNamespaceRepoTreePathRoute,
  getApiBucketsNamespaceRepoXetReadTokenRoute,
  getApiBucketsNamespaceRepoXetWriteTokenRoute,
  getApiBucketsNamespaceRoute,
  getBucketsNamespaceRepoResolvePathRoute,
  postApiBucketsNamespaceRepoBatchRoute,
  postApiBucketsNamespaceRepoLfsFilesDuplicateRoute,
  postApiBucketsNamespaceRepoPathsInfoRoute,
  postApiBucketsNamespaceRepoResourceGroupRoute,
  postApiBucketsNamespaceRepoRoute,
  putApiBucketsNamespaceRepoSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketsHandler = app
  .openapi(postApiBucketsNamespaceRepoLfsFilesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoXetWriteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoXetReadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiBucketsNamespaceRepoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsNamespaceRepoResolvePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoTreePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBucketsNamespaceRepoEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBucketsNamespaceRepoPathsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
