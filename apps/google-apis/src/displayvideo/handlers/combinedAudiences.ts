import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CombinedAudiencesCombinedAudienceIdRoute,
  getV2CombinedAudiencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const combinedAudiencesHandler = app
  .openapi(getV2CombinedAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CombinedAudiencesCombinedAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
