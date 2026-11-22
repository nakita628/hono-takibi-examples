import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharedDashTypesIdRoute,
  getSharedDashTypesRoute,
  getSharedDashTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedDashTypesHandler = app
  .openapi(getSharedDashTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedDashTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedDashTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
