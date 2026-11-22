import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHrisDepartmentsIdRoute,
  getHrisDepartmentsIdRoute,
  getHrisDepartmentsRoute,
  patchHrisDepartmentsIdRoute,
  postHrisDepartmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const departmentsHandler = app
  .openapi(getHrisDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisDepartmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisDepartmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisDepartmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
