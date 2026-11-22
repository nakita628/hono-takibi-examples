import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProposalsProposalIdRoute,
  getProposalsSearchRoute,
  patchProposalsProposalIdRevisionNumberUpdateActionRoute,
  postProposalsInsertRoute,
  postProposalsProposalIdSetupcompleteRoute,
  putProposalsProposalIdRevisionNumberUpdateActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const proposalsHandler = app
  .openapi(postProposalsInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProposalsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProposalsProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProposalsProposalIdSetupcompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProposalsProposalIdRevisionNumberUpdateActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProposalsProposalIdRevisionNumberUpdateActionRoute, (c) => {
    throw new Error('Not implemented')
  })
