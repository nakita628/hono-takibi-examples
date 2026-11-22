import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
