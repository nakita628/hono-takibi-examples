import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSnowmonkeyOutagesRoute,
  getApiSnowmonkeyConfigRoute,
  getApiSnowmonkeyOutagesRoute,
  patchApiSnowmonkeyConfigRoute,
  postApiSnowmonkeyStartRoute,
  postApiSnowmonkeyStopRoute,
  putApiSnowmonkeyConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snowmonkeyHandler = app
  .openapi(postApiSnowmonkeyStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSnowmonkeyStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSnowmonkeyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSnowmonkeyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiSnowmonkeyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSnowmonkeyOutagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSnowmonkeyOutagesRoute, (c) => {
    throw new Error('Not implemented')
  })
