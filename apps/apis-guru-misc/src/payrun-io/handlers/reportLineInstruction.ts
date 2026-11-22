import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdReportingInstructionReportingInstructionIdRoute,
  getEmployerEmployerIdReportingInstructionReportingInstructionIdRoute,
  getEmployerEmployerIdReportingInstructionsRoute,
  postEmployerEmployerIdReportingInstructionsRoute,
  putEmployerEmployerIdReportingInstructionReportingInstructionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportLineInstructionHandler = app
  .openapi(deleteEmployerEmployerIdReportingInstructionReportingInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportingInstructionReportingInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdReportingInstructionReportingInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportingInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdReportingInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
