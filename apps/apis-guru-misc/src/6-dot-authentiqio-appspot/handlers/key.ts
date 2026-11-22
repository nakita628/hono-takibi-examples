import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeyPKRoute,
  deleteKeyRoute,
  getKeyPKRoute,
  headKeyPKRoute,
  postKeyPKRoute,
  postKeyRoute,
  putKeyPKRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keyHandler = app
  .openapi(deleteKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeyPKRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeyPKRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headKeyPKRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeyPKRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKeyPKRoute, (c) => {
    throw new Error('Not implemented')
  })
