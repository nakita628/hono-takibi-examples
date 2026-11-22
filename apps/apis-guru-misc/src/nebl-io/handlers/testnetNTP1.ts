import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTestnetNtp1AddressinfoAddressRoute,
  getTestnetNtp1StakeholdersTokenidRoute,
  getTestnetNtp1TokenidTokensymbolRoute,
  getTestnetNtp1TokenmetadataTokenidRoute,
  getTestnetNtp1TokenmetadataTokenidUtxoRoute,
  getTestnetNtp1TransactioninfoTxidRoute,
  postTestnetNtp1BroadcastRoute,
  postTestnetNtp1BurntokenRoute,
  postTestnetNtp1IssueRoute,
  postTestnetNtp1SendtokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const testnetNTP1Handler = app
  .openapi(getTestnetNtp1AddressinfoAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1BroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1BurntokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1IssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestnetNtp1SendtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1StakeholdersTokenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TokenidTokensymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TokenmetadataTokenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TokenmetadataTokenidUtxoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestnetNtp1TransactioninfoTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
