import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSourcesIdRoute,
  getSourcesIdRoute,
  getSourcesRoute,
  postSourcesRoute,
  putSourcesIdArchiveRoute,
  putSourcesIdDisableRoute,
  putSourcesIdEnableRoute,
  putSourcesIdRoute,
  putSourcesIdUnarchiveRoute,
  putSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(getSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
