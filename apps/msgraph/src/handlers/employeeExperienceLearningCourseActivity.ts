import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
  deleteEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute,
  getEmployeeExperienceLearningCourseActivitiesCountRoute,
  getEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
  getEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute,
  getEmployeeExperienceLearningCourseActivitiesRoute,
  patchEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
  patchEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute,
  postEmployeeExperienceLearningCourseActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeExperienceLearningCourseActivityHandler = app
  .openapi(getEmployeeExperienceLearningCourseActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeeExperienceLearningCourseActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeeExperienceLearningCourseActivitiesLearningCourseActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEmployeeExperienceLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployeeExperienceLearningCourseActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
