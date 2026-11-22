import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFacetsRoute,
  getOpenSearchDescriptionRoute,
  getOpenSearchRoute,
  getSuggestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const swaggerDocsHandler = app
  .openapi(getFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenSearchDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
