import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFactCategoriesRoute,
  getFactRandomRoute,
  getFactRoute,
  getFactSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const randomFactsHandler = app
  .openapi(getFactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
