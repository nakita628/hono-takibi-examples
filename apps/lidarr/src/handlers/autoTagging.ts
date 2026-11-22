import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AutotaggingIdRoute,
  getApiV1AutotaggingIdRoute,
  getApiV1AutotaggingRoute,
  getApiV1AutotaggingSchemaRoute,
  postApiV1AutotaggingRoute,
  putApiV1AutotaggingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoTaggingHandler = app
  .openapi(getApiV1AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AutotaggingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotaggingSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
