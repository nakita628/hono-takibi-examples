import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiServicesServiceIdRoute,
  deleteApiServicesServiceIdTargetsRoute,
  deleteApiServicesServiceIdTemplateRoute,
  getApiGroupsServiceGroupIdServicesRoute,
  getApiServicesRoute,
  getApiServicesServiceIdRoute,
  getApiServicesServiceIdTargetsRoute,
  getApiServicesServiceIdTemplateRoute,
  patchApiServicesServiceIdRoute,
  patchApiServicesServiceIdTargetsRoute,
  postApiServicesRoute,
  postApiServicesServiceIdTargetsRoute,
  postApiServicesServiceIdTemplateRoute,
  putApiServicesServiceIdRoute,
  putApiServicesServiceIdTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getApiGroupsServiceGroupIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesServiceIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiServicesServiceIdTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
