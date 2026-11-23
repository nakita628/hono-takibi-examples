import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLibrariesIdRoute,
  getLibrariesIdRoute,
  getLibrariesIdStatisticsRoute,
  getLibrariesRoute,
  postLibrariesIdScanRoute,
  postLibrariesIdValidateRoute,
  postLibrariesRoute,
  putLibrariesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const librariesHandler = app
  .openapi(getLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLibrariesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibrariesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLibrariesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibrariesIdScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibrariesIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibrariesIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
