import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRequestRequestIdRoute,
  getRequestCountRoute,
  getRequestRequestIdRoute,
  getRequestRoute,
  postRequestRequestIdRetryRoute,
  postRequestRequestIdStatusRoute,
  postRequestRoute,
  putRequestRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestHandler = app
  .openapi(getRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestRequestIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestRequestIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
