import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmClientScopesIdRoute,
  getRealmClientScopesIdRoute,
  getRealmClientScopesRoute,
  postRealmClientScopesRoute,
  putRealmClientScopesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientScopesHandler = app
  .openapi(getRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
