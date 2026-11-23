import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWlmQueryGroupNameRoute,
  getWlmQueryGroupNameRoute,
  getWlmQueryGroupRoute,
  putWlmQueryGroupNameRoute,
  putWlmQueryGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wlmHandler = app
  .openapi(getWlmQueryGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWlmQueryGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWlmQueryGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWlmQueryGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWlmQueryGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
