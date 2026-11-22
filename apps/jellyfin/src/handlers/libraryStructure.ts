import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLibraryVirtualFoldersPathsRoute,
  deleteLibraryVirtualFoldersRoute,
  getLibraryVirtualFoldersRoute,
  postLibraryVirtualFoldersLibraryOptionsRoute,
  postLibraryVirtualFoldersNameRoute,
  postLibraryVirtualFoldersPathsRoute,
  postLibraryVirtualFoldersPathsUpdateRoute,
  postLibraryVirtualFoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const libraryStructureHandler = app
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
