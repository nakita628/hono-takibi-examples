import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProposalsProposalIdDealsRoute,
  postProposalsProposalIdDealsDeleteRoute,
  postProposalsProposalIdDealsInsertRoute,
  postProposalsProposalIdDealsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplacedealsHandler = app
  .openapi(getProposalsProposalIdDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProposalsProposalIdDealsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProposalsProposalIdDealsInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProposalsProposalIdDealsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
