import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTargetsTargetIdWebhooksIdIndexRoute,
  deleteWebhooksIdIndexRoute,
  getEventsIdIndexRoute,
  getEventsIndexRoute,
  getTargetsTargetIdEventsIdIndexRoute,
  getTargetsTargetIdEventsIndexRoute,
  getTargetsTargetIdWebhooksIdIndexRoute,
  getTargetsTargetIdWebhooksIndexRoute,
  getWebhooksIdIndexRoute,
  getWebhooksIndexRoute,
  patchTargetsTargetIdWebhooksIdIndexRoute,
  patchWebhooksIdIndexRoute,
  postTargetsTargetIdWebhooksIndexRoute,
  postWebhooksIndexRoute,
  putTargetsTargetIdWebhooksIdIndexRoute,
  putWebhooksIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdEventsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
