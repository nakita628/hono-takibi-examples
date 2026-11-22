import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute,
  deleteServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute,
  deleteServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute,
  getServicesHaproxyConfigurationBackendsParentNameTcpChecksRoute,
  getServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute,
  getServicesHaproxyConfigurationDefaultsParentNameTcpChecksRoute,
  getServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute,
  getServicesHaproxyConfigurationHealthchecksParentNameTcpChecksRoute,
  postServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute,
  postServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute,
  postServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute,
  putServicesHaproxyConfigurationBackendsParentNameTcpChecksRoute,
  putServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute,
  putServicesHaproxyConfigurationDefaultsParentNameTcpChecksRoute,
  putServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute,
  putServicesHaproxyConfigurationHealthchecksParentNameTcpChecksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tcpCheckHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameTcpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameTcpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameTcpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameTcpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationDefaultsParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationHealthchecksParentNameTcpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationHealthchecksParentNameTcpChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationHealthchecksParentNameTcpChecksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
