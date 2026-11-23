import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDepartmentsDepartmentIdRoute,
  getDepartmentsDepartmentIdRoute,
  getDepartmentsRoute,
  patchDepartmentsDepartmentIdRoute,
  postDepartmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const departmentsHandler = app
  .openapi(postDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
