import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdCustomAttributesKeyRoute,
  deleteApiV4ProjectsIdCustomAttributesKeyRoute,
  deleteApiV4UsersIdCustomAttributesKeyRoute,
  getApiV4GroupsIdCustomAttributesKeyRoute,
  getApiV4GroupsIdCustomAttributesRoute,
  getApiV4ProjectsIdCustomAttributesKeyRoute,
  getApiV4ProjectsIdCustomAttributesRoute,
  getApiV4UsersIdCustomAttributesKeyRoute,
  getApiV4UsersIdCustomAttributesRoute,
  putApiV4GroupsIdCustomAttributesKeyRoute,
  putApiV4ProjectsIdCustomAttributesKeyRoute,
  putApiV4UsersIdCustomAttributesKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customAttributesHandler = app
  .openapi(getApiV4UsersIdCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4UsersIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UsersIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdCustomAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
