import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetSpotPlacementScoresRoute,
  postActionGetSpotPlacementScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetSpotPlacementScoresHandler = app
  .openapi(getActionGetSpotPlacementScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSpotPlacementScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
