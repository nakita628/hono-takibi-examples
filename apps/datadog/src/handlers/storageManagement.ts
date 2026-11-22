import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CloudinventoryserviceSyncconfigsIdRoute,
  putApiV2CloudinventoryserviceSyncconfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageManagementHandler = app
  .openapi(putApiV2CloudinventoryserviceSyncconfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CloudinventoryserviceSyncconfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
