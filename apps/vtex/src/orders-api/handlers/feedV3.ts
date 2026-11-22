import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrdersFeedConfigRoute,
  getApiOrdersFeedConfigRoute,
  getApiOrdersFeedRoute,
  postApiOrdersExpressionsJsonataRoute,
  postApiOrdersFeedConfigRoute,
  postApiOrdersFeedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedV3Handler = app
  .openapi(postApiOrdersExpressionsJsonataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrdersFeedConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersFeedConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersFeedConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
