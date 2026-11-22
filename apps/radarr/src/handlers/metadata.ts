import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3MetadataIdRoute,
  getApiV3MetadataIdRoute,
  getApiV3MetadataRoute,
  getApiV3MetadataSchemaRoute,
  postApiV3MetadataActionNameRoute,
  postApiV3MetadataRoute,
  postApiV3MetadataTestallRoute,
  postApiV3MetadataTestRoute,
  putApiV3MetadataIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getApiV3MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MetadataSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3MetadataActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
