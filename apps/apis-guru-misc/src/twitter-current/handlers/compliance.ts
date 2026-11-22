import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get2ComplianceJobsIdRoute,
  get2ComplianceJobsRoute,
  get2TweetsComplianceStreamRoute,
  get2TweetsLabelStreamRoute,
  get2UsersComplianceStreamRoute,
  post2ComplianceJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const complianceHandler = app
  .openapi(get2ComplianceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ComplianceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ComplianceJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsComplianceStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsLabelStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersComplianceStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
