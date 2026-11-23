import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
