import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectHoldersRoute,
  getEdgarFilingsArchiveRoute,
  getFundHoldersRoute,
  getInsiderTransactionsRoute,
  getInstitutionalHoldersRoute,
  getSanctionsSourceRoute,
  getTaxInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regulatoryHandler = app
  .openapi(getDirectHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgarFilingsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFundHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsiderTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionalHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSanctionsSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
