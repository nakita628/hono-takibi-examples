import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSiprecConnectorsConnectorNameRoute,
  getSiprecConnectorsConnectorNameRoute,
  postSiprecConnectorsRoute,
  putSiprecConnectorsConnectorNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const siprecConnectorsHandler = app
  .openapi(postSiprecConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSiprecConnectorsConnectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSiprecConnectorsConnectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSiprecConnectorsConnectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
