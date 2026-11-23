import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNtp1AddressinfoAddressRoute,
  getNtp1StakeholdersTokenidRoute,
  getNtp1TokenidTokensymbolRoute,
  getNtp1TokenmetadataTokenidRoute,
  getNtp1TokenmetadataTokenidUtxoRoute,
  getNtp1TransactioninfoTxidRoute,
  postNtp1BroadcastRoute,
  postNtp1BurntokenRoute,
  postNtp1IssueRoute,
  postNtp1SendtokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ntp1Handler = app
  .openapi(getNtp1AddressinfoAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNtp1BroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNtp1BurntokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNtp1IssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNtp1SendtokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNtp1StakeholdersTokenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNtp1TokenidTokensymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNtp1TokenmetadataTokenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNtp1TokenmetadataTokenidUtxoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNtp1TransactioninfoTxidRoute, (c) => {
    throw new Error('Not implemented')
  })
