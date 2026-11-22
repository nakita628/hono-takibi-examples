import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LaborBreakTypesIdRoute,
  deleteV2LaborShiftsIdRoute,
  getV2LaborBreakTypesIdRoute,
  getV2LaborBreakTypesRoute,
  getV2LaborEmployeeWagesIdRoute,
  getV2LaborEmployeeWagesRoute,
  getV2LaborShiftsIdRoute,
  getV2LaborTeamMemberWagesIdRoute,
  getV2LaborTeamMemberWagesRoute,
  getV2LaborWorkweekConfigsRoute,
  postV2LaborBreakTypesRoute,
  postV2LaborShiftsRoute,
  postV2LaborShiftsSearchRoute,
  putV2LaborBreakTypesIdRoute,
  putV2LaborShiftsIdRoute,
  putV2LaborWorkweekConfigsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const laborHandler = app
  .openapi(getV2LaborBreakTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LaborBreakTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LaborBreakTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborBreakTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LaborBreakTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborEmployeeWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborEmployeeWagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LaborShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LaborShiftsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LaborShiftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborShiftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LaborShiftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborTeamMemberWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborTeamMemberWagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LaborWorkweekConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LaborWorkweekConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
