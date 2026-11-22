import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1ServicegroupsIdRoute,
  getSetupV1ServicegroupsIdRoute,
  getSetupV1ServicegroupsRoute,
  postSetupV1ServicegroupsRoute,
  putSetupV1ServicegroupsIdRecoverRoute,
  putSetupV1ServicegroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceGroupsHandler = app
  .openapi(getSetupV1ServicegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicegroupsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
