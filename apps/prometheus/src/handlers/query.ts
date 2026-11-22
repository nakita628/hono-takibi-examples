import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatQueryRoute,
  getParseQueryRoute,
  getQueryCostRoute,
  getQueryExemplarsRoute,
  getQueryRangeCostRoute,
  getQueryRangeRoute,
  getQueryRoute,
  postFormatQueryRoute,
  postParseQueryRoute,
  postQueryCostRoute,
  postQueryExemplarsRoute,
  postQueryRangeCostRoute,
  postQueryRangeRoute,
  postQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(getQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryRangeCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRangeCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryExemplarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryExemplarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFormatQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getParseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
