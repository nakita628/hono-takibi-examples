import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThemesIdRoute,
  getThemesRoute,
  postLegalEntitiesIdOnboardingLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostedOnboardingHandler = app
  .openapi(postLegalEntitiesIdOnboardingLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
