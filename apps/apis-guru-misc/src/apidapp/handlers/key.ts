import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeyKeyRoute,
  getKeyRoute,
  optionsKeyKeyRoute,
  optionsKeyRoute,
  postKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keyHandler = app
  .openapi(getKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
