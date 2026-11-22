import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestServicedeskapiServicedeskServiceDeskIdCustomerRoute,
  deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute,
  deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdRoute,
  getRestServicedeskapiServicedeskRoute,
  getRestServicedeskapiServicedeskServiceDeskIdCustomerRoute,
  getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleRoute,
  getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueRoute,
  getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdRoute,
  getRestServicedeskapiServicedeskServiceDeskIdQueueRoute,
  getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupRoute,
  getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldRoute,
  getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute,
  getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyRoute,
  getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdRoute,
  getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRoute,
  getRestServicedeskapiServicedeskServiceDeskIdRoute,
  postRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileRoute,
  postRestServicedeskapiServicedeskServiceDeskIdCustomerInviteRoute,
  postRestServicedeskapiServicedeskServiceDeskIdCustomerRoute,
  postRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckRoute,
  postRestServicedeskapiServicedeskServiceDeskIdRequesttypeRoute,
  putRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicedeskHandler = app
  .openapi(getRestServicedeskapiServicedeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiServicedeskServiceDeskIdCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiServicedeskServiceDeskIdCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiServicedeskServiceDeskIdCustomerInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiServicedeskServiceDeskIdRequesttypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupRoute, (c) => {
    throw new Error('Not implemented')
  })
