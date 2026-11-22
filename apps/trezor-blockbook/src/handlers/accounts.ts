import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AddressAddressRoute,
  getApiV2BalancehistoryDescriptorRoute,
  getApiV2UtxoDescriptorRoute,
  getApiV2XpubXpubRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getApiV2AddressAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2XpubXpubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UtxoDescriptorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BalancehistoryDescriptorRoute, (c) => {
    throw new Error('Not implemented')
  })
