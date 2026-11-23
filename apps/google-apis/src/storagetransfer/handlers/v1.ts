import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JobNameRoute,
  deleteV1NameRoute,
  getV1GoogleServiceAccountsProjectIdRoute,
  getV1JobNameRoute,
  getV1NameRoute,
  getV1ProjectsProjectIdAgentPoolsRoute,
  getV1TransferJobsRoute,
  patchV1JobNameRoute,
  patchV1NameRoute,
  postV1JobNameRunRoute,
  postV1NameCancelRoute,
  postV1NamePauseRoute,
  postV1NameResumeRoute,
  postV1ProjectsProjectIdAgentPoolsRoute,
  postV1TransferJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1GoogleServiceAccountsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdAgentPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransferJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransferJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1JobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobNameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
