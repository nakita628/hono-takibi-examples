import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV3LogImpressionsRoute,
  postV3LogPlayerReportsRoute,
  postV3SamplePlayableLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(postV3LogImpressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LogPlayerReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SamplePlayableLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
