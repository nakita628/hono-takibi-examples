import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SecurityGroupsPkRoute,
  getApiV1SecurityGroupsIndexRoute,
  getApiV1SecurityGroupsInfoRoute,
  getApiV1SecurityGroupsPkRoute,
  postApiV1SecurityGroupsIndexRoute,
  putApiV1SecurityGroupsPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityGroupsHandler = app
  .openapi(getApiV1SecurityGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityGroupsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityGroupsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityGroupsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityGroupsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
