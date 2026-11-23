import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLibraryElementsLibraryElementUidRoute,
  getLibraryElementsLibraryElementUidConnectionsIndexRoute,
  getLibraryElementsLibraryElementUidRoute,
  getLibraryElementsNameLibraryElementNameRoute,
  getLibraryElementsRoute,
  patchLibraryElementsLibraryElementUidRoute,
  postLibraryElementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const libraryElementsHandler = app
  .openapi(getLibraryElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibraryElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryElementsNameLibraryElementNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLibraryElementsLibraryElementUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryElementsLibraryElementUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLibraryElementsLibraryElementUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibraryElementsLibraryElementUidConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
