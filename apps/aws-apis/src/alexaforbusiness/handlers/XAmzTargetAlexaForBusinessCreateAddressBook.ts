import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
