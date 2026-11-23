import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIlmPolicyPolicyRoute,
  getIlmPolicyPolicyRoute,
  getIlmPolicyRoute,
  getIlmStatusRoute,
  postIlmMigrateToDataTiersRoute,
  postIlmMoveIndexRoute,
  postIlmStartRoute,
  postIlmStopRoute,
  putIlmPolicyPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ilmHandler = app
  .openapi(getIlmPolicyPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIlmPolicyPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIlmPolicyPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIlmPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIlmStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIlmMigrateToDataTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIlmMoveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIlmStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIlmStopRoute, (c) => {
    throw new Error('Not implemented')
  })
