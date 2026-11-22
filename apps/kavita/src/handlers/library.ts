import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLibraryDeleteMultipleRoute,
  deleteApiLibraryDeleteRoute,
  getApiLibraryJumpBarRoute,
  getApiLibraryLibrariesRoute,
  getApiLibraryListRoute,
  getApiLibraryMetadataEnabledLibrariesRoute,
  getApiLibraryMetadataProvidersRoute,
  getApiLibraryNameExistsRoute,
  getApiLibraryRoute,
  getApiLibraryScrobbleEnabledLibrariesRoute,
  getApiLibraryTypeRoute,
  getApiLibraryUserLibrariesRoute,
  getApiLibraryWatchStatusRoute,
  postApiLibraryCopySettingsFromRoute,
  postApiLibraryCreateRoute,
  postApiLibraryFolderWatchRetryRoute,
  postApiLibraryGrantAccessRoute,
  postApiLibraryHasFilesAtRootRoute,
  postApiLibraryRefreshMetadataMultipleRoute,
  postApiLibraryRefreshMetadataRoute,
  postApiLibraryScanAllRoute,
  postApiLibraryScanFolderRoute,
  postApiLibraryScanMultipleRoute,
  postApiLibraryScanRoute,
  postApiLibraryUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const libraryHandler = app
  .openapi(postApiLibraryCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryHasFilesAtRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryUserLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryJumpBarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryGrantAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryFolderWatchRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryWatchStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryRefreshMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryRefreshMetadataMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryCopySettingsFromRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLibraryDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLibraryDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryMetadataProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryMetadataEnabledLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryScrobbleEnabledLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
