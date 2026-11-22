import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPinsCreateRoute,
  postPinsDeleteRoute,
  postPinsInfoRoute,
  postPinsListRoute,
  postPinsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pinsHandler = app
  .openapi(postPinsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
