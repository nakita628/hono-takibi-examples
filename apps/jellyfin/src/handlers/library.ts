import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLibraryVirtualFoldersPathsRoute,
  deleteLibraryVirtualFoldersRoute,
  getLibraryMediaFoldersRoute,
  getLibraryPhysicalPathsRoute,
  getLibraryVirtualFoldersRoute,
  postLibraryMediaUpdatedRoute,
  postLibraryMoviesAddedRoute,
  postLibraryMoviesUpdatedRoute,
  postLibraryRefreshRoute,
  postLibrarySeriesAddedRoute,
  postLibrarySeriesUpdatedRoute,
  postLibraryVirtualFoldersLibraryOptionsRoute,
  postLibraryVirtualFoldersNameRoute,
  postLibraryVirtualFoldersPathsRoute,
  postLibraryVirtualFoldersPathsUpdateRoute,
  postLibraryVirtualFoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const libraryHandler = app
  .openapi(postLibraryMediaUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryMediaFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryMoviesAddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryMoviesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryPhysicalPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibrarySeriesAddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibrarySeriesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryVirtualFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryVirtualFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLibraryVirtualFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryVirtualFoldersLibraryOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryVirtualFoldersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryVirtualFoldersPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLibraryVirtualFoldersPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryVirtualFoldersPathsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
