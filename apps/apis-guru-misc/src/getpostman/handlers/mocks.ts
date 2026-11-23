import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMocksMockUidRoute,
  deleteMocksMockUidUnpublishRoute,
  getMocksMockUidRoute,
  getMocksRoute,
  postMocksMockUidPublishRoute,
  postMocksRoute,
  putMocksMockUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mocksHandler = app
  .openapi(getMocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMocksMockUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMocksMockUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMocksMockUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMocksMockUidPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMocksMockUidUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
