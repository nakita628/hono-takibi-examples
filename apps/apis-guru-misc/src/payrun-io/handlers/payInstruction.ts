import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute,
  patchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
  postEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute,
  putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payInstructionHandler = app
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
