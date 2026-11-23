import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStandardsControlsStandardsSubscriptionArnRoute,
  getStandardsRoute,
  patchStandardsControlStandardsControlArnRoute,
  postStandardsDeregisterRoute,
  postStandardsGetRoute,
  postStandardsRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const standardsHandler = app
  .openapi(postStandardsDeregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStandardsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStandardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStandardsControlsStandardsSubscriptionArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStandardsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStandardsControlStandardsControlArnRoute, (c) => {
    throw new Error('Not implemented')
  })
