import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDisassociateContactFromAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
