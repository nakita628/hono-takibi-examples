import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessCreateAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
