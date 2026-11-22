import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactsDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const contactsOrgContactFunctionsHandler = app.openapi(getContactsDeltaRoute, (c) => {
  throw new Error('Not implemented')
})
