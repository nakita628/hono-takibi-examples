import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCveCheckConfigRoute,
  getCveCheckLastRoute,
  getCveRoute,
  postCveCheckConfigRoute,
  postCveCheckRoute,
  postCveListRoute,
  postCveUpdateFsRoute,
  postCveUpdateIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cveHandler = app
  .openapi(getCveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCveCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCveCheckConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCveCheckConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCveCheckLastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCveListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCveUpdateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCveUpdateFsRoute, (c) => {
    throw new Error('Not implemented')
  })
