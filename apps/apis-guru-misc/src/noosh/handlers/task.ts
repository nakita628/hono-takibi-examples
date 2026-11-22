import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdCustomTaskStatusRoute,
  getV1WorkgroupsWorkgroupIdCustomTaskTypesRoute,
  getV1WorkgroupsWorkgroupIdDefaultTaskPriorityRoute,
  getV1WorkgroupsWorkgroupIdDefaultTaskStatusRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdRoute,
  getV1WorkgroupsWorkgroupIdTasksRoute,
  getV1WorkgroupsWorkgroupIdTasksTaskIdRoute,
  getV1WorkgroupsWorkgroupIdTaskTypesRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdCustomTaskStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdCustomTaskTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdDefaultTaskPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdDefaultTaskStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdTaskTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
