import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentJobsRoute,
  patchV1beta1NameRoute,
  postV1beta1NamePauseRoute,
  postV1beta1NameResumeRoute,
  postV1beta1NameRunRoute,
  postV1beta1ParentJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
