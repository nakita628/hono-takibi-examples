import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthorizerAuthorizerNameRoute,
  getAuthorizerAuthorizerNameRoute,
  postAuthorizerAuthorizerNameRoute,
  postAuthorizerAuthorizerNameTestRoute,
  putAuthorizerAuthorizerNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizerHandler = app
  .openapi(postAuthorizerAuthorizerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizerAuthorizerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizerAuthorizerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthorizerAuthorizerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizerAuthorizerNameTestRoute, (c) => {
    throw new Error('Not implemented')
  })
