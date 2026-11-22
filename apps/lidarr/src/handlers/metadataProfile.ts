import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MetadataprofileIdRoute,
  getApiV1MetadataprofileIdRoute,
  getApiV1MetadataprofileRoute,
  postApiV1MetadataprofileRoute,
  putApiV1MetadataprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataProfileHandler = app
  .openapi(postApiV1MetadataprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MetadataprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MetadataprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
