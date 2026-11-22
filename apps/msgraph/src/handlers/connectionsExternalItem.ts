import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdRoute,
  deleteConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  getConnectionsExternalConnectionIdItemsCountRoute,
  getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesCountRoute,
  getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdPerformedByRoute,
  getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdRoute,
  getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesRoute,
  getConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  getConnectionsExternalConnectionIdItemsRoute,
  patchConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdRoute,
  postConnectionsExternalConnectionIdItemsExternalItemIdActivitiesRoute,
  postConnectionsExternalConnectionIdItemsExternalItemIdMicrosoftGraphExternalConnectorsAddActivitiesRoute,
  postConnectionsExternalConnectionIdItemsRoute,
  putConnectionsExternalConnectionIdItemsExternalItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsExternalItemHandler = app
  .openapi(getConnectionsExternalConnectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsExternalConnectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsExternalConnectionIdItemsExternalItemIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesExternalActivityIdPerformedByRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getConnectionsExternalConnectionIdItemsExternalItemIdActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postConnectionsExternalConnectionIdItemsExternalItemIdMicrosoftGraphExternalConnectorsAddActivitiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getConnectionsExternalConnectionIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
