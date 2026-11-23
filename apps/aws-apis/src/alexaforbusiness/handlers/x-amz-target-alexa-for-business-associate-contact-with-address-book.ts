import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateContactWithAddressBookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessAssociateContactWithAddressBookHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateContactWithAddressBookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
