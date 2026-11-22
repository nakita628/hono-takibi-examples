import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPolicyGenerationJobIdRoute,
  getPolicyGenerationRoute,
  postPolicyValidationRoute,
  putPolicyGenerationJobIdRoute,
  putPolicyGenerationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policyHandler = app
  .openapi(putPolicyGenerationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPolicyGenerationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPolicyGenerationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPolicyGenerationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPolicyValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
