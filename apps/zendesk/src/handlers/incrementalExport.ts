import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2IncrementalIncrementalResourceSampleRoute,
  getApiV2IncrementalOrganizationsRoute,
  getApiV2IncrementalTicketEventsRoute,
  getApiV2IncrementalTicketsCursorRoute,
  getApiV2IncrementalTicketsRoute,
  getApiV2IncrementalUsersCursorRoute,
  getApiV2IncrementalUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incrementalExportHandler = app
  .openapi(getApiV2IncrementalIncrementalResourceSampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalTicketEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalTicketsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalUsersCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
