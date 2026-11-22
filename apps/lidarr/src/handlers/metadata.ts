import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MetadataIdRoute,
  getApiV1MetadataIdRoute,
  getApiV1MetadataRoute,
  getApiV1MetadataSchemaRoute,
  postApiV1MetadataActionNameRoute,
  postApiV1MetadataRoute,
  postApiV1MetadataTestallRoute,
  postApiV1MetadataTestRoute,
  putApiV1MetadataIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getApiV1MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetadataSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetadataActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
