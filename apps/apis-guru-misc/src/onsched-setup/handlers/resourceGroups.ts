import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1ResourcegroupsIdRoute,
  getSetupV1ResourcegroupsIdRoute,
  getSetupV1ResourcegroupsRoute,
  postSetupV1ResourcegroupsRoute,
  putSetupV1ResourcegroupsIdRecoverRoute,
  putSetupV1ResourcegroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceGroupsHandler = app
  .openapi(getSetupV1ResourcegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcegroupsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
