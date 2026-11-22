import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SourcesSourceIdEnablementRoute,
  getV1SourcesSourceIdEnablementRoute,
  postV1SourcesSourceIdEnablementRoute,
  putV1SourcesSourceIdEnablementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fusionSourceEnablementHandler = app
  .openapi(postV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SourcesSourceIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
