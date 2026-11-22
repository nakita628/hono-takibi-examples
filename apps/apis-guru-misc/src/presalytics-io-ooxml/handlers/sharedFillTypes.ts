import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharedFillTypesIdRoute,
  getSharedFillTypesRoute,
  getSharedFillTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedFillTypesHandler = app
  .openapi(getSharedFillTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedFillTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedFillTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
