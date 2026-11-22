import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeSolutionsRoute,
  deleteMeSolutionsWorkingTimeScheduleRoute,
  getMeSolutionsRoute,
  getMeSolutionsWorkingTimeScheduleRoute,
  patchMeSolutionsRoute,
  patchMeSolutionsWorkingTimeScheduleRoute,
  postMeSolutionsWorkingTimeScheduleEndWorkingTimeRoute,
  postMeSolutionsWorkingTimeScheduleStartWorkingTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserSolutionRootHandler = app
  .openapi(getMeSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeSolutionsWorkingTimeScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeSolutionsWorkingTimeScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSolutionsWorkingTimeScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSolutionsWorkingTimeScheduleEndWorkingTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSolutionsWorkingTimeScheduleStartWorkingTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
