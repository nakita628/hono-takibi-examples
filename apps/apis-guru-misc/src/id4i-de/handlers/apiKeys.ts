import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
  deleteApiV1ApikeysKeyPrivilegesRoute,
  deleteApiV1ApikeysKeyRoute,
  getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
  getApiV1ApikeysKeyPrivilegesRoute,
  getApiV1ApikeysKeyRoute,
  getApiV1ApikeysPrivilegesRoute,
  getApiV1ApikeysRoute,
  postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
  postApiV1ApikeysKeyPrivilegesRoute,
  postApiV1ApikeysRoute,
  putApiV1ApikeysKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getApiV1ApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApikeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApikeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApikeysKeyPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysKeyPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApikeysKeyPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute, (c) => {
    throw new Error('Not implemented')
  })
