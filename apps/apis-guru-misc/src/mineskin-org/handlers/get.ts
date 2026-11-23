import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetDelayRoute,
  getGetIdIdRoute,
  getGetListPageRoute,
  getGetUuidUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const getHandler = app
  .openapi(getGetDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetListPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetUuidUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
