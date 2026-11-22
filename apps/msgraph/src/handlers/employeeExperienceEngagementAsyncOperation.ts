import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmployeeExperienceEngagementAsyncOperationsEngagementAsyncOperationIdRoute,
  getEmployeeExperienceEngagementAsyncOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeExperienceEngagementAsyncOperationHandler = app
  .openapi(getEmployeeExperienceEngagementAsyncOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceEngagementAsyncOperationsEngagementAsyncOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
