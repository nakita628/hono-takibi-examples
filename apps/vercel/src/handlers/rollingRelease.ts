import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsIdOrNameRollingReleaseConfigRoute,
  getV1ProjectsIdOrNameRollingReleaseBillingRoute,
  getV1ProjectsIdOrNameRollingReleaseConfigRoute,
  getV1ProjectsIdOrNameRollingReleaseRoute,
  patchV1ProjectsIdOrNameRollingReleaseConfigRoute,
  postV1ProjectsIdOrNameRollingReleaseApproveStageRoute,
  postV1ProjectsIdOrNameRollingReleaseCompleteRoute,
  postV1ProjectsIdOrNameRollingReleaseStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rollingReleaseHandler = app
  .openapi(getV1ProjectsIdOrNameRollingReleaseBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameRollingReleaseConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameRollingReleaseConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsIdOrNameRollingReleaseConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameRollingReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameRollingReleaseApproveStageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameRollingReleaseStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameRollingReleaseCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
