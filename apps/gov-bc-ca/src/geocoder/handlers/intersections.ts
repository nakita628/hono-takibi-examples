import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntersectionsIntersectionIDOutputFormatRoute,
  getIntersectionsNearestOutputFormatRoute,
  getIntersectionsNearOutputFormatRoute,
  getIntersectionsWithinOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const intersectionsHandler = app
  .openapi(getIntersectionsNearOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntersectionsNearestOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntersectionsWithinOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntersectionsIntersectionIDOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
