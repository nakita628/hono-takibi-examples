import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNamesAuditCandidatesIndexRoute,
  getNamesAuditCommitteesIndexRoute,
  getNamesCandidatesIndexRoute,
  getNamesCommitteesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namesHandler = app
  .openapi(getNamesAuditCandidatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesAuditCommitteesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesCandidatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesCommitteesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
