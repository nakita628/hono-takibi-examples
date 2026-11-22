import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiClientValidatorsIdRoute,
  getApiClientValidatorsIdRoute,
  getApiClientValidatorsRoute,
  patchApiClientValidatorsIdRoute,
  postApiClientValidatorsRoute,
  putApiClientValidatorsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const validationAuthoritiesHandler = app
  .openapi(getApiClientValidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientValidatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiClientValidatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
