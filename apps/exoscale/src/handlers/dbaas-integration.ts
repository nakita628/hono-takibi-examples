import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasIntegrationIdRoute,
  getDbaasIntegrationIdRoute,
  postDbaasIntegrationRoute,
  putDbaasIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasIntegrationHandler = app
  .openapi(deleteDbaasIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
