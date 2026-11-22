import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute,
  deleteServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameHttpChecksRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameHttpChecksRoute,
  getServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute,
  getServicesHaproxyConfigurationHealthchecksParentNameHttpChecksRoute,
  postServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute,
  postServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameHttpChecksRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameHttpChecksRoute,
  putServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute,
  putServicesHaproxyConfigurationHealthchecksParentNameHttpChecksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpCheckHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationHealthchecksParentNameHttpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationHealthchecksParentNameHttpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationHealthchecksParentNameHttpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
