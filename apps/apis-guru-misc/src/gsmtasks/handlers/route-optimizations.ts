import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRouteOptimizationsIdIndexRoute,
  getRouteOptimizationsIdResultsIndexRoute,
  getRouteOptimizationsIdRoutesIndexRoute,
  getRouteOptimizationsIndexRoute,
  postRouteOptimizationsIdCommitIndexRoute,
  postRouteOptimizationsIdRoutesIndexRoute,
  postRouteOptimizationsIdScheduleIndexRoute,
  postRouteOptimizationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routeOptimizationsHandler = app
  .openapi(getRouteOptimizationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteOptimizationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRouteOptimizationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteOptimizationsIdCommitIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRouteOptimizationsIdResultsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRouteOptimizationsIdRoutesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteOptimizationsIdRoutesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRouteOptimizationsIdScheduleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
