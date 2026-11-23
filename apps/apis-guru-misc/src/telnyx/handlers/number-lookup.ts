import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumberLookupPhoneNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const numberLookupHandler = app.openapi(getNumberLookupPhoneNumberRoute, (c) => {
  throw new Error('Not implemented')
})
