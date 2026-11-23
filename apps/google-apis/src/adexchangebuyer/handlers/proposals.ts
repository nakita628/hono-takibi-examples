import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProposalsProposalIdDealsRoute,
  getProposalsProposalIdNotesRoute,
  getProposalsProposalIdRoute,
  getProposalsSearchRoute,
  patchProposalsProposalIdRevisionNumberUpdateActionRoute,
  postProposalsInsertRoute,
  postProposalsProposalIdDealsDeleteRoute,
  postProposalsProposalIdDealsInsertRoute,
  postProposalsProposalIdDealsUpdateRoute,
  postProposalsProposalIdNotesInsertRoute,
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
  .openapi(getProposalsProposalIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProposalsProposalIdNotesInsertRoute, (c) => {
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
