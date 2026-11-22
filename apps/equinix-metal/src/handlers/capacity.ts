import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCapacityMetrosRoute,
  getCapacityRoute,
  getOrganizationsIdCapacityMetrosRoute,
  getOrganizationsIdCapacityRoute,
  postCapacityMetrosRoute,
  postCapacityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const capacityHandler = app
  .openapi(getCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCapacityMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCapacityMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdCapacityMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
