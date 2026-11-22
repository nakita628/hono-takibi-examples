import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1HistoryId4nOrganizationIdRoute,
  getApiV1HistoryId4nOrganizationIdSequenceIdRoute,
  getApiV1HistoryId4nRoute,
  patchApiV1HistoryId4nOrganizationIdSequenceIdRoute,
  postApiV1HistoryId4nRoute,
  putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getApiV1HistoryId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1HistoryId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryId4nOrganizationIdSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1HistoryId4nOrganizationIdSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
