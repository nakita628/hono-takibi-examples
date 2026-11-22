import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute,
  patchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
  postIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
