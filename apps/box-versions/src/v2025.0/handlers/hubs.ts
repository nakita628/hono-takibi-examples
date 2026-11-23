import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHubsHubIdRoute,
  getHubsHubIdRoute,
  getHubsRoute,
  postHubsHubIdCopyRoute,
  postHubsHubIdManageItemsRoute,
  postHubsRoute,
  putHubsHubIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hubsHandler = app
  .openapi(getHubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHubsHubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putHubsHubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHubsHubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubsHubIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubsHubIdManageItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
