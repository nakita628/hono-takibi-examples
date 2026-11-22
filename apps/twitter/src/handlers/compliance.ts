import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2ComplianceJobsIdRoute,
  get2ComplianceJobsIdDownloadRoute,
  get2ComplianceJobsIdRoute,
  get2ComplianceJobsRoute,
  post2ComplianceJobsRoute,
  put2ComplianceJobsIdUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const complianceHandler = app
  .openapi(get2ComplianceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ComplianceJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ComplianceJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ComplianceJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ComplianceJobsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ComplianceJobsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
