import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSlmPolicyPolicyIdRoute,
  getSlmPolicyPolicyIdRoute,
  getSlmPolicyRoute,
  getSlmStatsRoute,
  getSlmStatusRoute,
  postSlmExecuteRetentionRoute,
  postSlmStartRoute,
  postSlmStopRoute,
  putSlmPolicyPolicyIdExecuteRoute,
  putSlmPolicyPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slmHandler = app
  .openapi(getSlmPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSlmPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSlmPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSlmPolicyPolicyIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSlmExecuteRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlmPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlmStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlmStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSlmStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSlmStopRoute, (c) => {
    throw new Error('Not implemented')
  })
