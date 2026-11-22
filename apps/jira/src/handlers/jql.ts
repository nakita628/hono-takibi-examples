import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3InvalidJqlsAccessLogRoute,
  getRestApi3JqlAutocompletedataRoute,
  getRestApi3JqlAutocompletedataSuggestionsRoute,
  postRestApi3JqlAutocompletedataRoute,
  postRestApi3JqlParseRoute,
  postRestApi3JqlPdcleanerRoute,
  postRestApi3JqlSanitizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jqlHandler = app
  .openapi(getRestApi3InvalidJqlsAccessLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3JqlAutocompletedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlAutocompletedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3JqlAutocompletedataSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlPdcleanerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlSanitizeRoute, (c) => {
    throw new Error('Not implemented')
  })
