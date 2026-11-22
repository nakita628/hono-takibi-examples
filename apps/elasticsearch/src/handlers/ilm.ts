import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIlmPolicyPolicyRoute,
  getIlmPolicyPolicyRoute,
  getIlmPolicyRoute,
  getIlmStatusRoute,
  getIndexIlmExplainRoute,
  postIlmMigrateToDataTiersRoute,
  postIlmMoveIndexRoute,
  postIlmStartRoute,
  postIlmStopRoute,
  postIndexIlmRemoveRoute,
  postIndexIlmRetryRoute,
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
  .openapi(getIndexIlmExplainRoute, (c) => {
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
  .openapi(postIndexIlmRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexIlmRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIlmStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIlmStopRoute, (c) => {
    throw new Error('Not implemented')
  })
