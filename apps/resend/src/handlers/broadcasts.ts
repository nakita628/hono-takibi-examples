import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBroadcastsIdRoute,
  getBroadcastsIdClickedLinksRoute,
  getBroadcastsIdRecipientsRoute,
  getBroadcastsIdRoute,
  getBroadcastsRoute,
  patchBroadcastsIdRoute,
  postBroadcastsIdCancelRoute,
  postBroadcastsIdDuplicateRoute,
  postBroadcastsIdSendRoute,
  postBroadcastsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const broadcastsHandler = app
  .openapi(postBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBroadcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBroadcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBroadcastsIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBroadcastsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBroadcastsIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastsIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastsIdClickedLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
