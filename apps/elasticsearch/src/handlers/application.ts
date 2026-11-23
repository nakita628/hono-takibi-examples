import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationAnalyticsNameRoute,
  deleteApplicationSearchApplicationNameRoute,
  getApplicationAnalyticsNameRoute,
  getApplicationAnalyticsRoute,
  getApplicationSearchApplicationNameRoute,
  getApplicationSearchApplicationNameSearchRoute,
  getApplicationSearchApplicationRoute,
  postApplicationAnalyticsCollectionNameEventEventTypeRoute,
  postApplicationSearchApplicationNameRenderQueryRoute,
  postApplicationSearchApplicationNameSearchRoute,
  putApplicationAnalyticsNameRoute,
  putApplicationSearchApplicationNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(getApplicationSearchApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationSearchApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationSearchApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationAnalyticsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationAnalyticsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationAnalyticsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationSearchApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationAnalyticsCollectionNameEventEventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationSearchApplicationNameRenderQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationSearchApplicationNameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationSearchApplicationNameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
