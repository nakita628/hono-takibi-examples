import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmployeeExperienceRoute, patchEmployeeExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const employeeExperienceEmployeeExperienceHandler = app
  .openapi(getEmployeeExperienceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployeeExperienceRoute, (c) => {
    throw new Error('Not implemented')
  })
