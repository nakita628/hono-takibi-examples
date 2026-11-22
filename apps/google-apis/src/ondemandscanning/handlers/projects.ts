import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentVulnerabilitiesRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameWaitRoute,
  postV1beta1ParentScansAnalyzePackagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentScansAnalyzePackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
