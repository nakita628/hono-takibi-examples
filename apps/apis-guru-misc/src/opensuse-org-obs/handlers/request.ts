import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRequestIdRoute,
  getRequestIdRoute,
  getRequestRoute,
  getRequestViewCollectionRoute,
  postRequestIdCmdDiffRoute,
  postRequestIdRoute,
  postRequestRoute,
  putRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestHandler = app
  .openapi(getRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestIdCmdDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestViewCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
