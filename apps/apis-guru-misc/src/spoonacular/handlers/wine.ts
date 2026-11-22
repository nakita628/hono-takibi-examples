import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoodWineDescriptionRoute,
  getFoodWineDishesRoute,
  getFoodWinePairingRoute,
  getFoodWineRecommendationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wineHandler = app
  .openapi(getFoodWineDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodWineDishesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodWinePairingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodWineRecommendationRoute, (c) => {
    throw new Error('Not implemented')
  })
