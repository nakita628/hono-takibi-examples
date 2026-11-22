import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAddressingPrefixesPrefixIdBgpStatusRoute,
  patchAccountsAccountIdAddressingPrefixesPrefixIdBgpStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressManagementDynamicAdvertisementHandler = app
  .openapi(getAccountsAccountIdAddressingPrefixesPrefixIdBgpStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAddressingPrefixesPrefixIdBgpStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
