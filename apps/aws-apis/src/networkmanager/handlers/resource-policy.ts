import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteResourcePolicyResourceArnRoute,
  getResourcePolicyResourceArnRoute,
  postResourcePolicyResourceArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcePolicyHandler = app
  .openapi(deleteResourcePolicyResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcePolicyResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcePolicyResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
