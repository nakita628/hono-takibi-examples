import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LibrariesLibraryIdRoute,
  getApiV1LibrariesLibraryIdRoute,
  getApiV1LibrariesRoute,
  patchApiV1LibrariesLibraryIdRoute,
  postApiV1LibrariesLibraryIdAnalyzeRoute,
  postApiV1LibrariesLibraryIdEmptyTrashRoute,
  postApiV1LibrariesLibraryIdMetadataRefreshRoute,
  postApiV1LibrariesLibraryIdScanRoute,
  postApiV1LibrariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const librariesHandler = app
  .openapi(getApiV1LibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdEmptyTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdMetadataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdScanRoute, (c) => {
    throw new Error('Not implemented')
  })
