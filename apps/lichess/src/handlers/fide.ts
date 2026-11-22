import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFidePlayerPlayerIdRatingsRoute,
  getApiFidePlayerPlayerIdRoute,
  getApiFidePlayerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fideHandler = app
  .openapi(getApiFidePlayerPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFidePlayerPlayerIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFidePlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
