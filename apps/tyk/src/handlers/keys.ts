import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykKeysKeyIDRoute,
  getTykKeysKeyIDRoute,
  getTykKeysRoute,
  postTykKeysCreateRoute,
  postTykKeysKeyIDRoute,
  postTykKeysPolicyKeyIDRoute,
  postTykKeysPreviewRoute,
  postTykKeysRoute,
  putTykKeysKeyIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getTykKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysPolicyKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
