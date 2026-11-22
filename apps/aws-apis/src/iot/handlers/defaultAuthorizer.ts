import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDefaultAuthorizerRoute,
  getDefaultAuthorizerRoute,
  postDefaultAuthorizerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const defaultAuthorizerHandler = app
  .openapi(deleteDefaultAuthorizerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDefaultAuthorizerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDefaultAuthorizerRoute, (c) => {
    throw new Error('Not implemented')
  })
