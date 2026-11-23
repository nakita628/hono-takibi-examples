import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV0ImportsIdRoute,
  deleteV0MonitorsIdRoute,
  deleteV0WebhooksIdRoute,
  deleteV0WebsetsIdRoute,
  deleteV0WebsetsWebsetEnrichmentsIdRoute,
  deleteV0WebsetsWebsetItemsIdRoute,
  getV0EventsIdRoute,
  getV0EventsRoute,
  getV0ImportsIdRoute,
  getV0ImportsRoute,
  getV0MonitorsIdRoute,
  getV0MonitorsMonitorRunsIdRoute,
  getV0MonitorsMonitorRunsRoute,
  getV0MonitorsRoute,
  getV0TeamsMeRoute,
  getV0WebhooksIdAttemptsRoute,
  getV0WebhooksIdRoute,
  getV0WebhooksRoute,
  getV0WebsetsIdRoute,
  getV0WebsetsRoute,
  getV0WebsetsWebsetEnrichmentsIdRoute,
  getV0WebsetsWebsetItemsIdRoute,
  getV0WebsetsWebsetItemsRoute,
  getV0WebsetsWebsetSearchesIdRoute,
  patchV0ImportsIdRoute,
  patchV0MonitorsIdRoute,
  patchV0WebhooksIdRoute,
  patchV0WebsetsWebsetEnrichmentsIdRoute,
  postV0ImportsRoute,
  postV0MonitorsRoute,
  postV0WebhooksRoute,
  postV0WebsetsIdCancelRoute,
  postV0WebsetsIdRoute,
  postV0WebsetsPreviewRoute,
  postV0WebsetsRoute,
  postV0WebsetsWebsetEnrichmentsIdCancelRoute,
  postV0WebsetsWebsetEnrichmentsRoute,
  postV0WebsetsWebsetSearchesIdCancelRoute,
  postV0WebsetsWebsetSearchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v0Handler = app
  .openapi(getV0TeamsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsWebsetSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsWebsetSearchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsWebsetSearchesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsWebsetEnrichmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0WebsetsWebsetEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsWebsetEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebsetsWebsetEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsWebsetEnrichmentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsWebsetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebsetsWebsetItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsWebsetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0MonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0MonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0MonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0MonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0MonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0MonitorsMonitorRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0MonitorsMonitorRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0ImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0ImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0ImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0ImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0ImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebhooksIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
