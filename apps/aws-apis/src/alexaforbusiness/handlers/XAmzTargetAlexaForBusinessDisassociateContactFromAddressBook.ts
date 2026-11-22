import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDisassociateContactFromAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
