import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SuspendedTicketsDestroyManyRoute,
  deleteApiV2SuspendedTicketsIdRoute,
  getApiV2SuspendedTicketsIdRoute,
  getApiV2SuspendedTicketsRoute,
  postApiV2SuspendedTicketsAttachmentsRoute,
  postApiV2SuspendedTicketsExportRoute,
  putApiV2SuspendedTicketsBulkRecoverRoute,
  putApiV2SuspendedTicketsIdRecoverRoute,
  putApiV2SuspendedTicketsRecoverManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suspendedTicketsHandler = app
  .openapi(getApiV2SuspendedTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SuspendedTicketsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SuspendedTicketsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SuspendedTicketsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SuspendedTicketsAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SuspendedTicketsBulkRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SuspendedTicketsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SuspendedTicketsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SuspendedTicketsRecoverManyRoute, (c) => {
    throw new Error('Not implemented')
  })
