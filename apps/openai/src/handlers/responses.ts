import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteResponsesResponseIdBetaTrueRoute,
  deleteResponsesResponseIdRoute,
  getResponsesResponseIdBetaTrueRoute,
  getResponsesResponseIdInputItemsBetaTrueRoute,
  getResponsesResponseIdInputItemsRoute,
  getResponsesResponseIdRoute,
  postResponsesBetaTrueRoute,
  postResponsesCompactBetaTrueRoute,
  postResponsesCompactRoute,
  postResponsesInputTokensBetaTrueRoute,
  postResponsesInputTokensRoute,
  postResponsesResponseIdCancelBetaTrueRoute,
  postResponsesResponseIdCancelRoute,
  postResponsesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const responsesHandler = app
  .openapi(postResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResponsesResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteResponsesResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponsesResponseIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResponsesResponseIdInputItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponsesInputTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponsesCompactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponsesBetaTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResponsesResponseIdBetaTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteResponsesResponseIdBetaTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponsesResponseIdCancelBetaTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponsesCompactBetaTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResponsesResponseIdInputItemsBetaTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponsesInputTokensBetaTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
