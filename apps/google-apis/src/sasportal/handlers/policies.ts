import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1alpha1PoliciesGetRoute,
  postV1alpha1PoliciesSetRoute,
  postV1alpha1PoliciesTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(postV1alpha1PoliciesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1PoliciesSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1PoliciesTestRoute, (c) => {
    throw new Error('Not implemented')
  })
