import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHrisEmployeesIdRoute,
  getHrisEmployeesIdRoute,
  getHrisEmployeesRoute,
  patchHrisEmployeesIdRoute,
  postHrisEmployeesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeesHandler = app
  .openapi(getHrisEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisEmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisEmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisEmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
