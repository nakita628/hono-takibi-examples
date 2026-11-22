import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1SourceProvidersKeyRoute,
  getV1SourceProvidersRoute,
  getV1SourcesKeyEventsRoute,
  getV1SourcesKeyLogsRoute,
  getV1SourcesKeyRoute,
  getV1SourcesKeyStatusRoute,
  getV1SourcesRoute,
  postV1SourcesKeyRehearseRoute,
  putV1SourcesKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(getV1SourcesKeyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesKeyRehearseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SourcesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesKeyEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceProvidersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesKeyLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
