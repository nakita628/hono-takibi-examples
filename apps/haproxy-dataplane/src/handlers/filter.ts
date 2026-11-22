import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameFiltersRoute,
  getServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameFiltersRoute,
  postServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameFiltersRoute,
  putServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filterHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
