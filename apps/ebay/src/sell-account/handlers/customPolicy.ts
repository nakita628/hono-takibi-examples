import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomPolicyCustomPolicyIdRoute,
  getCustomPolicyIndexRoute,
  postCustomPolicyIndexRoute,
  putCustomPolicyCustomPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customPolicyHandler = app
  .openapi(getCustomPolicyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomPolicyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomPolicyCustomPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomPolicyCustomPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
