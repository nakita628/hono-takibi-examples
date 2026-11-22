import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddonsIdRoute,
  getAddonsIdRoute,
  getAddonsRoute,
  postAddonsRoute,
  putAddonsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addOnsHandler = app
  .openapi(getAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
