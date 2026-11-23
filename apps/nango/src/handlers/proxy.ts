import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProxyAnyPathRoute,
  getProxyAnyPathRoute,
  patchProxyAnyPathRoute,
  postProxyAnyPathRoute,
  putProxyAnyPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const proxyHandler = app
  .openapi(getProxyAnyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProxyAnyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProxyAnyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProxyAnyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProxyAnyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
