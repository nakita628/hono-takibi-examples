import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute,
  deleteServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute,
  deleteServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameAclsRoute,
  getServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameAclsRoute,
  getServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute,
  getServicesHaproxyConfigurationFcgiAppsParentNameAclsRoute,
  getServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute,
  getServicesHaproxyConfigurationFrontendsParentNameAclsRoute,
  postServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute,
  postServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute,
  postServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameAclsRoute,
  putServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameAclsRoute,
  putServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute,
  putServicesHaproxyConfigurationFcgiAppsParentNameAclsRoute,
  putServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute,
  putServicesHaproxyConfigurationFrontendsParentNameAclsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aclHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFcgiAppsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFcgiAppsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFcgiAppsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameAclsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
