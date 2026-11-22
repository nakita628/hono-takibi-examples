import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataAttributesRoute,
  postDataAttributesRoute,
  putDataAttributesDataAttributeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataAttributesHandler = app
  .openapi(getDataAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataAttributesDataAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
