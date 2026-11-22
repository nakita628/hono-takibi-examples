import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
