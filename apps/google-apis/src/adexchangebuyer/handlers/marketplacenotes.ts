import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProposalsProposalIdNotesRoute,
  postProposalsProposalIdNotesInsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplacenotesHandler = app
  .openapi(getProposalsProposalIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProposalsProposalIdNotesInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
