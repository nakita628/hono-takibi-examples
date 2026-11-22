import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
  getIssueTrackingCollectionsCollectionIdTicketsRoute,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
  patchIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
  postIssueTrackingCollectionsCollectionIdTicketsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketsHandler = app
  .openapi(getIssueTrackingCollectionsCollectionIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueTrackingCollectionsCollectionIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
