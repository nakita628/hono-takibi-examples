import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributesComputedIdRoute,
  getAttributesComputedRoute,
  postAttributesComputedRoute,
  putAttributesComputedIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributesHandler = app
  .openapi(getAttributesComputedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributesComputedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttributesComputedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAttributesComputedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
