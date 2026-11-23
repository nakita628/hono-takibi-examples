import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
  deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
  getIssueTrackingCollectionsCollectionIdRoute,
  getIssueTrackingCollectionsCollectionIdTagsRoute,
  getIssueTrackingCollectionsCollectionIdTicketsRoute,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
  getIssueTrackingCollectionsCollectionIdUsersIdRoute,
  getIssueTrackingCollectionsCollectionIdUsersRoute,
  getIssueTrackingCollectionsRoute,
  patchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
  patchIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
  postIssueTrackingCollectionsCollectionIdTicketsRoute,
  postIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTrackingHandler = app
  .openapi(getIssueTrackingCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackingCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackingCollectionsCollectionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getIssueTrackingCollectionsCollectionIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackingCollectionsCollectionIdUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
