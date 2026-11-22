import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommitteeChamberCommitteeCodeBillsRoute,
  getCommitteeChamberCommitteeCodeHouseCommunicationRoute,
  getCommitteeChamberCommitteeCodeNominationsRoute,
  getCommitteeChamberCommitteeCodeReportsRoute,
  getCommitteeChamberCommitteeCodeRoute,
  getCommitteeChamberCommitteeCodeSenateCommunicationRoute,
  getCommitteeChamberRoute,
  getCommitteeCongressChamberCommitteeCodeRoute,
  getCommitteeCongressChamberRoute,
  getCommitteeCongressRoute,
  getCommitteeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const committeeHandler = app
  .openapi(getCommitteeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeChamberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCongressChamberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeChamberCommitteeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCongressChamberCommitteeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeChamberCommitteeCodeBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeChamberCommitteeCodeReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeChamberCommitteeCodeNominationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeChamberCommitteeCodeHouseCommunicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeChamberCommitteeCodeSenateCommunicationRoute, (c) => {
    throw new Error('Not implemented')
  })
