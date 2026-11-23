import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasThanosNameRoute,
  getDbaasThanosNameRoute,
  getDbaasThanosServiceNameUserUsernamePasswordRevealRoute,
  postDbaasThanosNameRoute,
  putDbaasThanosNameMaintenanceStartRoute,
  putDbaasThanosNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasThanosHandler = app
  .openapi(putDbaasThanosNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasThanosServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
