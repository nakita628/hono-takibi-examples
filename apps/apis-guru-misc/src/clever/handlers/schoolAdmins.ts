import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchoolAdminsIdRoute,
  getSchoolAdminsIdSchoolsRoute,
  getSchoolAdminsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schoolAdminsHandler = app
  .openapi(getSchoolAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchoolAdminsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchoolAdminsIdSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
