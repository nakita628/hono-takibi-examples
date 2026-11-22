import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProxyRoute,
  getProxyRoute,
  optionsProxyRoute,
  patchProxyRoute,
  postProxyRoute,
  putProxyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const executeHandler = app
  .openapi(deleteProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
