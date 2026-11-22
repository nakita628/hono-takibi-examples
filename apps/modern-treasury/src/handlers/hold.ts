import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiHoldsIdRoute,
  getApiHoldsRoute,
  patchApiHoldsIdRoute,
  postApiHoldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const holdHandler = app
  .openapi(getApiHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHoldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiHoldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
