import { OpenAPIHono } from '@hono/zod-openapi'
import { getPropertiesAccountsRoute, getPropertiesUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const propertiesHandler = app
  .openapi(getPropertiesAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertiesUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
