import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharedLineEndTypesIdRoute,
  getSharedLineEndTypesRoute,
  getSharedLineEndTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedLineEndTypesHandler = app
  .openapi(getSharedLineEndTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedLineEndTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedLineEndTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
