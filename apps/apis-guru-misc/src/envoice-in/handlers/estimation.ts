import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiEstimationAllRoute,
  getApiEstimationDetailsRoute,
  getApiEstimationStatusRoute,
  getApiEstimationUriRoute,
  postApiEstimationChangestatusRoute,
  postApiEstimationConvertRoute,
  postApiEstimationDeleteRoute,
  postApiEstimationNewRoute,
  postApiEstimationSendtoclientRoute,
  postApiEstimationUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const estimationHandler = app
  .openapi(getApiEstimationAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationChangestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEstimationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationSendtoclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEstimationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEstimationUriRoute, (c) => {
    throw new Error('Not implemented')
  })
