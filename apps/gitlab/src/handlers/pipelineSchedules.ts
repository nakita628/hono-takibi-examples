import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdRoute,
  deleteApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKeyRoute,
  getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPipelinesRoute,
  getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdRoute,
  getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKeyRoute,
  getApiV4ProjectsIdPipelineSchedulesRoute,
  postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPlayRoute,
  postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdTakeOwnershipRoute,
  postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesRoute,
  postApiV4ProjectsIdPipelineSchedulesRoute,
  putApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdRoute,
  putApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipelineSchedulesHandler = app
  .openapi(getApiV4ProjectsIdPipelineSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPipelineSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdTakeOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
