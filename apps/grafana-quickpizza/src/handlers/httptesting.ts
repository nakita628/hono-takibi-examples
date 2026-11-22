import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDeleteRoute,
  getApiBasicAuthUsernamePasswordRoute,
  getApiBytesNRoute,
  getApiCookiesRoute,
  getApiDelayDelayRoute,
  getApiGetRoute,
  getApiHeadersRoute,
  getApiJsonRoute,
  getApiStatusStatusRoute,
  getApiXmlRoute,
  patchApiPatchRoute,
  postApiCookiesRoute,
  postApiPostRoute,
  putApiPutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httptestingHandler = app
  .openapi(getApiStatusStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBytesNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBasicAuthUsernamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
