import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSearchQnasQnaIdRoute,
  getSearchQnasCountRoute,
  getSearchQnasQnaIdRoute,
  getSearchQnasRoute,
  patchSearchQnasQnaIdRoute,
  postSearchQnasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchQnaHandler = app
  .openapi(getSearchQnasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchQnasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchQnasQnaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSearchQnasQnaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchQnasQnaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchQnasCountRoute, (c) => {
    throw new Error('Not implemented')
  })
