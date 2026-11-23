import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmObjectLibrary202609EnablementObjectTypeIdRoute,
  getCrmObjectLibrary202609EnablementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjectLibrary202609EnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjectLibrary202609EnablementObjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
