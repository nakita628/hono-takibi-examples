import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaAccessPoliciesRoute,
  getV1betaParentAccessLevelsRoute,
  getV1betaParentServicePerimetersRoute,
  patchV1betaNameRoute,
  postV1betaAccessPoliciesRoute,
  postV1betaParentAccessLevelsRoute,
  postV1betaParentServicePerimetersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessPoliciesHandler = app
  .openapi(getV1betaAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentAccessLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentAccessLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentServicePerimetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentServicePerimetersRoute, (c) => {
    throw new Error('Not implemented')
  })
