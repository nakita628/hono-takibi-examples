import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharedColorTypesIdRoute,
  getSharedColorTypesRoute,
  getSharedColorTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedColorTypesHandler = app
  .openapi(getSharedColorTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedColorTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedColorTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
