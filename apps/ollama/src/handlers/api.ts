import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDeleteRoute,
  getApiBalanceRoute,
  getApiPsRoute,
  getApiTagsRoute,
  getApiUsageRoute,
  getApiVersionRoute,
  headApiBlobsDigestRoute,
  postApiBlobsDigestRoute,
  postApiChatRoute,
  postApiCopyRoute,
  postApiCreateRoute,
  postApiEmbedRoute,
  postApiGenerateRoute,
  postApiPullRoute,
  postApiPushRoute,
  postApiShowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
