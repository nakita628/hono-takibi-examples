import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustompagesSlugRoute,
  getCustompagesRoute,
  getCustompagesSlugRoute,
  postCustompagesRoute,
  putCustompagesSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const custompagesHandler = app
  .openapi(getCustompagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustompagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustompagesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustompagesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustompagesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
