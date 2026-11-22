import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArchiveDeleteNetworkRoute,
  getArchiveDeleteRoute,
  getArchiveExportRoute,
  getArchiveListRoute,
  postClutterAddRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageHandler = app
  .openapi(getArchiveDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchiveDeleteNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchiveExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchiveListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClutterAddRoute, (c) => {
    throw new Error('Not implemented')
  })
