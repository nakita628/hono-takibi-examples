import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminCiVariablesKeyRoute,
  deleteApiV4GroupsIdVariablesKeyRoute,
  deleteApiV4ProjectsIdVariablesKeyRoute,
  getApiV4AdminCiVariablesKeyRoute,
  getApiV4AdminCiVariablesRoute,
  getApiV4GroupsIdVariablesKeyRoute,
  getApiV4GroupsIdVariablesRoute,
  getApiV4ProjectsIdVariablesKeyRoute,
  getApiV4ProjectsIdVariablesRoute,
  postApiV4AdminCiVariablesRoute,
  postApiV4GroupsIdVariablesRoute,
  postApiV4ProjectsIdVariablesRoute,
  putApiV4AdminCiVariablesKeyRoute,
  putApiV4GroupsIdVariablesKeyRoute,
  putApiV4ProjectsIdVariablesKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ciVariablesHandler = app
  .openapi(getApiV4GroupsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminCiVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AdminCiVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminCiVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminCiVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminCiVariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
