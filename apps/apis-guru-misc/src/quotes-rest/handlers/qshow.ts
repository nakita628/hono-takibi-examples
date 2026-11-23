import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQshowRoute,
  getQshowListRoute,
  getQshowQuotesRoute,
  getQshowRoute,
  patchQshowRoute,
  postQshowQuotesAddRoute,
  postQshowQuotesRemoveRoute,
  putQshowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qshowHandler = app
  .openapi(deleteQshowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQshowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchQshowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQshowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQshowListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQshowQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQshowQuotesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQshowQuotesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
