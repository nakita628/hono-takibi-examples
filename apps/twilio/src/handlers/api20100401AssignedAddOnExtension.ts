import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AssignedAddOnExtensionHandler = app
  .openapi(
    get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
