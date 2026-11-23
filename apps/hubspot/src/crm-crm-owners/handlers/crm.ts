import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrmOwners202609OwnerIdRoute, getCrmOwners202609Route } from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmOwners202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmOwners202609OwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
