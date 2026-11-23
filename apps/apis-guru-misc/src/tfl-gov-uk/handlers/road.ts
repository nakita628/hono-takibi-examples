import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoadAllDisruptionDisruptionIdsRoute,
  getRoadAllStreetDisruptionRoute,
  getRoadIdsDisruptionRoute,
  getRoadIdsRoute,
  getRoadIdsStatusRoute,
  getRoadMetaCategoriesRoute,
  getRoadMetaSeveritiesRoute,
  getRoadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roadHandler = app
  .openapi(getRoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoadMetaCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoadMetaSeveritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoadAllDisruptionDisruptionIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoadAllStreetDisruptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoadIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoadIdsDisruptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoadIdsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
