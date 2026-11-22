import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDataAttributesCreateRoute,
  postDataAttributesDeleteRoute,
  postDataAttributesInfoRoute,
  postDataAttributesListRoute,
  postDataAttributesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataAttributesHandler = app
  .openapi(postDataAttributesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataAttributesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataAttributesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataAttributesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataAttributesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
