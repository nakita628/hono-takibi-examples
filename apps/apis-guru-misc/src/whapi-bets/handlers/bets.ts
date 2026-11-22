import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFreebetsRoute,
  getHistoryRoute,
  postBetComplexRoute,
  postBetSingleRoute,
  postBetslipsRoute,
  putBetIdCashinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betsHandler = app
  .openapi(postBetComplexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetSingleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFreebetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBetIdCashinRoute, (c) => {
    throw new Error('Not implemented')
  })
