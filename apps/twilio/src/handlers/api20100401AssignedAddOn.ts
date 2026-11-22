import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AssignedAddOnHandler = app
  .openapi(
    get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    post20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
