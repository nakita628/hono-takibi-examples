import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute,
  deleteProjectsProjectNamePlacementsPlacementNameRoute,
  deleteProjectsProjectNameRoute,
  getProjectsProjectNamePlacementsPlacementNameDevicesRoute,
  getProjectsProjectNamePlacementsPlacementNameRoute,
  getProjectsProjectNamePlacementsRoute,
  getProjectsProjectNameRoute,
  getProjectsRoute,
  postProjectsProjectNamePlacementsRoute,
  postProjectsRoute,
  putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute,
  putProjectsProjectNamePlacementsPlacementNameRoute,
  putProjectsProjectNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectNamePlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectNamePlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectNamePlacementsPlacementNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectNamePlacementsPlacementNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectNamePlacementsPlacementNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectNamePlacementsPlacementNameDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
