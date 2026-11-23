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
} from './routes'
import {
  deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRouteHandler,
  deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdRouteHandler,
  getIssueTrackingCollectionsCollectionIdRouteHandler,
  getIssueTrackingCollectionsCollectionIdTagsRouteHandler,
  getIssueTrackingCollectionsCollectionIdTicketsRouteHandler,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRouteHandler,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRouteHandler,
  getIssueTrackingCollectionsCollectionIdTicketsTicketIdRouteHandler,
  getIssueTrackingCollectionsCollectionIdUsersIdRouteHandler,
  getIssueTrackingCollectionsCollectionIdUsersRouteHandler,
  getIssueTrackingCollectionsRouteHandler,
  patchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRouteHandler,
  patchIssueTrackingCollectionsCollectionIdTicketsTicketIdRouteHandler,
  postIssueTrackingCollectionsCollectionIdTicketsRouteHandler,
  postIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getIssueTrackingCollectionsRoute, getIssueTrackingCollectionsRouteHandler)
  .openapi(
    getIssueTrackingCollectionsCollectionIdRoute,
    getIssueTrackingCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    getIssueTrackingCollectionsCollectionIdTagsRoute,
    getIssueTrackingCollectionsCollectionIdTagsRouteHandler,
  )
  .openapi(
    getIssueTrackingCollectionsCollectionIdTicketsRoute,
    getIssueTrackingCollectionsCollectionIdTicketsRouteHandler,
  )
  .openapi(
    postIssueTrackingCollectionsCollectionIdTicketsRoute,
    postIssueTrackingCollectionsCollectionIdTicketsRouteHandler,
  )
  .openapi(
    deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
    deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdRouteHandler,
  )
  .openapi(
    getIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
    getIssueTrackingCollectionsCollectionIdTicketsTicketIdRouteHandler,
  )
  .openapi(
    patchIssueTrackingCollectionsCollectionIdTicketsTicketIdRoute,
    patchIssueTrackingCollectionsCollectionIdTicketsTicketIdRouteHandler,
  )
  .openapi(
    getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute,
    getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRouteHandler,
  )
  .openapi(
    postIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRoute,
    postIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsRouteHandler,
  )
  .openapi(
    deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
    deleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRouteHandler,
  )
  .openapi(
    getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
    getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRouteHandler,
  )
  .openapi(
    patchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRoute,
    patchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdRouteHandler,
  )
  .openapi(
    getIssueTrackingCollectionsCollectionIdUsersRoute,
    getIssueTrackingCollectionsCollectionIdUsersRouteHandler,
  )
  .openapi(
    getIssueTrackingCollectionsCollectionIdUsersIdRoute,
    getIssueTrackingCollectionsCollectionIdUsersIdRouteHandler,
  )

export default app
