import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAggregateRoute,
  getPredictRoute,
  getRouteRoute,
  getSendFeedbackRoute,
  getTransformInputRoute,
  getTransformOutputRoute,
  postAggregateRoute,
  postPredictRoute,
  postRouteRoute,
  postSendFeedbackRoute,
  postTransformInputRoute,
  postTransformOutputRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalHandler = app
  .openapi(getAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
