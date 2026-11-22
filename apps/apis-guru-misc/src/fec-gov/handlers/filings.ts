import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCandidateCandidateIdFilingsIndexRoute,
  getCommitteeCommitteeIdFilingsIndexRoute,
  getFilingsIndexRoute,
  getOperationsLogIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filingsHandler = app
  .openapi(getCandidateCandidateIdFilingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdFilingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperationsLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
