import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsExternalIdExternalIdRoute,
  deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsLearningContentIdRoute,
  deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
  deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesLearningCourseActivityIdRoute,
  deleteEmployeeExperienceLearningProvidersLearningProviderIdRoute,
  getEmployeeExperienceLearningProvidersCountRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsCountRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsExternalIdExternalIdRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsLearningContentIdRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesCountRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesLearningCourseActivityIdRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesRoute,
  getEmployeeExperienceLearningProvidersLearningProviderIdRoute,
  getEmployeeExperienceLearningProvidersRoute,
  patchEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsExternalIdExternalIdRoute,
  patchEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsLearningContentIdRoute,
  patchEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
  patchEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesLearningCourseActivityIdRoute,
  patchEmployeeExperienceLearningProvidersLearningProviderIdRoute,
  postEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsRoute,
  postEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesRoute,
  postEmployeeExperienceLearningProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeExperienceLearningProviderHandler = app
  .openapi(getEmployeeExperienceLearningProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeeExperienceLearningProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceLearningProvidersLearningProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployeeExperienceLearningProvidersLearningProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeeExperienceLearningProvidersLearningProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsLearningContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsLearningContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsLearningContentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsExternalIdExternalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsExternalIdExternalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsExternalIdExternalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceLearningProvidersLearningProviderIdLearningContentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesLearningCourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesLearningCourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesLearningCourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesExternalcourseActivityIdExternalcourseActivityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployeeExperienceLearningProvidersLearningProviderIdLearningCourseActivitiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployeeExperienceLearningProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
