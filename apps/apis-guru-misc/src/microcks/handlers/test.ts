import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTestsIdEventsTestCaseIdRoute,
  getTestsIdMessagesTestCaseIdRoute,
  getTestsIdRoute,
  getTestsServiceServiceIdCountRoute,
  getTestsServiceServiceIdRoute,
  postTestsIdTestCaseResultRoute,
  postTestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const testHandler = app
  .openapi(postTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestsServiceServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestsServiceServiceIdCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestsIdEventsTestCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestsIdMessagesTestCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestsIdTestCaseResultRoute, (c) => {
    throw new Error('Not implemented')
  })
