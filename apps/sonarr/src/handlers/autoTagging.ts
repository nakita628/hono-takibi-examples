import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AutotaggingIdRoute,
  getApiV3AutotaggingIdRoute,
  getApiV3AutotaggingRoute,
  getApiV3AutotaggingSchemaRoute,
  postApiV3AutotaggingRoute,
  putApiV3AutotaggingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoTaggingHandler = app
  .openapi(postApiV3AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AutotaggingSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
