import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute,
  get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute,
  getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute,
  getV1WorkgroupsWorkgroupIdProductTypesRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute,
  getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute,
  postV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute,
  put11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specHandler = app
  .openapi(get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
