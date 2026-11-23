import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScopeJobRoute,
  getScopeJobRoute,
  headScopeJobRoute,
  postScopeJobRoute,
  postScopeRoute,
  putScopeJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scopeHandler = app
  .openapi(postScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScopeJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScopeJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headScopeJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScopeJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScopeJobRoute, (c) => {
    throw new Error('Not implemented')
  })
