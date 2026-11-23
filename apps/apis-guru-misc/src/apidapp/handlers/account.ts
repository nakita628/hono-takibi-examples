import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountIdRoute,
  optionsAccountIdRoute,
  optionsAccountRoute,
  postAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(optionsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
