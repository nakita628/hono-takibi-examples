import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2InfoTypesRoute,
  getV2NameRoute,
  getV2ParentDeidentifyTemplatesRoute,
  getV2ParentDlpJobsRoute,
  getV2ParentInfoTypesRoute,
  getV2ParentInspectTemplatesRoute,
  getV2ParentJobTriggersRoute,
  getV2ParentStoredInfoTypesRoute,
  patchV2NameRoute,
  postV2NameActivateRoute,
  postV2NameCancelRoute,
  postV2NameFinishRoute,
  postV2NameHybridInspectRoute,
  postV2ParentContentDeidentifyRoute,
  postV2ParentContentInspectRoute,
  postV2ParentContentReidentifyRoute,
  postV2ParentDeidentifyTemplatesRoute,
  postV2ParentDlpJobsRoute,
  postV2ParentImageRedactRoute,
  postV2ParentInspectTemplatesRoute,
  postV2ParentJobTriggersRoute,
  postV2ParentStoredInfoTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2InfoTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameHybridInspectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentContentDeidentifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentContentInspectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentContentReidentifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentDeidentifyTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentDeidentifyTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentDlpJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentDlpJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentImageRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentInfoTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentInspectTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentInspectTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentJobTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentJobTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentStoredInfoTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentStoredInfoTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
