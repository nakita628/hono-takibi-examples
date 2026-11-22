import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReactionsGetRoute,
  getReactionsListRoute,
  postReactionsAddRoute,
  postReactionsRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reactionsHandler = app
  .openapi(postReactionsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReactionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReactionsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
