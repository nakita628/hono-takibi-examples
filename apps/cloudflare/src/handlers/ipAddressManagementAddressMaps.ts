import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAddressingAddressMapsAddressMapIdAccountsMemberAccountIdRoute,
  deleteAccountsAccountIdAddressingAddressMapsAddressMapIdIpsIpAddressRoute,
  deleteAccountsAccountIdAddressingAddressMapsAddressMapIdIpsRoute,
  deleteAccountsAccountIdAddressingAddressMapsAddressMapIdRoute,
  deleteAccountsAccountIdAddressingAddressMapsAddressMapIdZonesMemberZoneIdRoute,
  deleteAccountsAccountIdAddressingAddressMapsAddressMapIdZonesRoute,
  getAccountsAccountIdAddressingAddressMapsAddressMapIdRoute,
  getAccountsAccountIdAddressingAddressMapsRoute,
  patchAccountsAccountIdAddressingAddressMapsAddressMapIdRoute,
  postAccountsAccountIdAddressingAddressMapsAddressMapIdIpsRoute,
  postAccountsAccountIdAddressingAddressMapsAddressMapIdZonesRoute,
  postAccountsAccountIdAddressingAddressMapsRoute,
  putAccountsAccountIdAddressingAddressMapsAddressMapIdAccountsMemberAccountIdRoute,
  putAccountsAccountIdAddressingAddressMapsAddressMapIdIpsIpAddressRoute,
  putAccountsAccountIdAddressingAddressMapsAddressMapIdZonesMemberZoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressManagementAddressMapsHandler = app
  .openapi(getAccountsAccountIdAddressingAddressMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingAddressMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingAddressMapsAddressMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAddressingAddressMapsAddressMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAddressingAddressMapsAddressMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdAddressingAddressMapsAddressMapIdAccountsMemberAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdAddressingAddressMapsAddressMapIdAccountsMemberAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteAccountsAccountIdAddressingAddressMapsAddressMapIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingAddressMapsAddressMapIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingAddressMapsAddressMapIdIpsIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAddressingAddressMapsAddressMapIdIpsIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingAddressMapsAddressMapIdZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingAddressMapsAddressMapIdZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingAddressMapsAddressMapIdZonesMemberZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAddressingAddressMapsAddressMapIdZonesMemberZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
