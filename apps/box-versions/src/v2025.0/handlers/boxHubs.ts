import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHubsHubIdRoute,
  getEnterpriseHubsRoute,
  getHubsHubIdRoute,
  getHubsRoute,
  postHubsHubIdCopyRoute,
  postHubsRoute,
  putHubsHubIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boxHubsHandler = app
  .openapi(getHubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseHubsRoute, (c) => {
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
